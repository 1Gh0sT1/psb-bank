import json
import urllib.request

def seed():
    data_path = '/root/psb-bank/scripts/import_data.json'
    url = 'http://localhost:8090/api/'
    
    with open(data_path, 'r', encoding='utf-8') as f:
        data = json.load(f)

    # Auth as admin
    auth_data = json.dumps({
        'identity': 'tmarat794@gmail.com',
        'password': 'Admin123!@#'
    }).encode()
    
    req = urllib.request.Request(
        url + 'admins/auth-with-password',
        data=auth_data,
        headers={'Content-Type': 'application/json'}
    )
    
    try:
        with urllib.request.urlopen(req) as response:
            auth_res = json.loads(response.read().decode())
            token = auth_res['token']
            print("Authenticated successfully.")
    except Exception as e:
        print(f"Auth failed: {e}")
        return

    def post_record(collection, record):
        body = json.dumps(record).encode()
        r = urllib.request.Request(
            url + f'collections/{collection}/records',
            data=body,
            headers={
                'Content-Type': 'application/json',
                'Authorization': token
            }
        )
        try:
            with urllib.request.urlopen(r) as resp:
                pass
        except Exception as e:
            print(f"Failed to add to {collection}: {record.get('name')}. Error: {e}")

    print("Importing banks...")
    for bank in data['banks']:
        post_record('banks', bank)
        
    print("Importing brokers...")
    for broker in data['brokers']:
        post_record('brokers', broker)
        
    print("Seeding completed successfully!")

if __name__ == "__main__":
    seed()
