import PocketBase from 'pocketbase';
import fs from 'fs';
import path from 'path';

// --- CONFIGURATION ---
const PB_URL = process.env.PB_URL || 'http://127.0.0.1:8090';
const ADMIN_EMAIL = process.env.ADMIN_EMAIL || 'admin@admin.ru';
const ADMIN_PASS = process.env.ADMIN_PASS || 'adminadmin';

const DATA_FILE = path.join(__dirname, 'import_data.json');

const pb = new PocketBase(PB_URL);

async function seed() {
  console.log('🚀 Starting Database Seed Process...');

  try {
    // 1. Authenticate as Admin
    console.log(`🔑 Authenticating as ${ADMIN_EMAIL}...`);
    await pb.admins.authWithPassword(ADMIN_EMAIL, ADMIN_PASS);
    console.log('✅ Authentication successful.');

    // 2. Define Collections
    const collections = [
      {
        name: 'banks',
        schema: [
          { name: 'name', type: 'text', required: true },
          { name: 'status', type: 'text' },
          { name: 'start_of_operations', type: 'text' },
          { name: 'country_of_origin', type: 'text' },
        ],
        listRule: '',
        viewRule: '',
      },
      {
        name: 'brokers',
        schema: [
          { name: 'name', type: 'text', required: true },
          { name: 'status', type: 'text' },
          { name: 'country_of_origin', type: 'text' },
          { name: 'license_authority', type: 'text' },
          { name: 'license_expiry', type: 'text' },
        ],
        listRule: '',
        viewRule: '',
      },
    ];

    // 3. Create or Update Collections
    for (const collData of collections) {
      console.log(
        `📦 Setting up collection: ${collData.name}...`
      );
      try {
        const existing = await pb.collections.getOne(collData.name);
        // Update existing
        await pb.collections.update(existing.id, collData);
        console.log(`✅ Collection '${collData.name}' updated.`);
      } catch (err) {
        // Create new
        await pb.collections.create(collData);
        console.log(`✅ Collection '${collData.name}' created.`);
      }
    }

    // 4. Import Data
    if (!fs.existsSync(DATA_FILE)) {
      console.error(`❌ Error: Data file not found at ${DATA_FILE}`);
      return;
    }

    const rawData = fs.readFileSync(DATA_FILE, 'utf8');
    const data = JSON.parse(rawData);

    // Seed Banks
    console.log('🏦 Seeding Banks...');
    await clearCollection('banks');
    for (const bank of data.banks) {
      await pb.collection('banks').create(bank);
    }
    console.log(`✅ Successfully seeded ${data.banks.length} banks.`);

    // Seed Brokers
    console.log('📈 Seeding Brokers...');
    await clearCollection('brokers');
    for (const broker of data.brokers) {
      await pb.collection('brokers').create(broker);
    }
    console.log(`✅ Successfully seeded ${data.brokers.length} brokers.`);

    console.log('\n✨ Database Seed Complete!');
  } catch (error: any) {
    console.error('❌ Seed Failed:', error.message);
    if (error.data) {
      console.error('Details:', JSON.stringify(error.data, null, 2));
    }
  }
}

async function clearCollection(name: string) {
  console.log(`🧹 Clearing records in ${name}...`);
  const records = await pb.collection(name).getFullList({
    fields: 'id',
  });
  for (const record of records) {
    await pb.collection(name).delete(record.id);
  }
}

seed();
