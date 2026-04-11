/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("2h1a0gsa5iczf0q")

  // remove
  collection.schema.removeField("vyh5ywn6")

  // remove
  collection.schema.removeField("uog7t6es")

  // remove
  collection.schema.removeField("b9tfpcyc")

  // remove
  collection.schema.removeField("qc2s0tch")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "y9wfhy9t",
    "name": "name",
    "type": "text",
    "required": true,
    "presentable": false,
    "unique": false,
    "options": {
      "min": null,
      "max": null,
      "pattern": ""
    }
  }))

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "v0ed0ycn",
    "name": "status",
    "type": "text",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "min": null,
      "max": null,
      "pattern": ""
    }
  }))

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "tlijyzhe",
    "name": "start_of_operations",
    "type": "text",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "min": null,
      "max": null,
      "pattern": ""
    }
  }))

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "rcxmp7rj",
    "name": "country_of_origin",
    "type": "text",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "min": null,
      "max": null,
      "pattern": ""
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("2h1a0gsa5iczf0q")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "vyh5ywn6",
    "name": "name",
    "type": "text",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "min": null,
      "max": null,
      "pattern": ""
    }
  }))

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "uog7t6es",
    "name": "country",
    "type": "text",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "min": null,
      "max": null,
      "pattern": ""
    }
  }))

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "b9tfpcyc",
    "name": "swift_bic",
    "type": "text",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "min": null,
      "max": null,
      "pattern": ""
    }
  }))

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "qc2s0tch",
    "name": "status",
    "type": "select",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "maxSelect": 1,
      "values": [
        "Active",
        "Pending",
        "Inactive"
      ]
    }
  }))

  // remove
  collection.schema.removeField("y9wfhy9t")

  // remove
  collection.schema.removeField("v0ed0ycn")

  // remove
  collection.schema.removeField("tlijyzhe")

  // remove
  collection.schema.removeField("rcxmp7rj")

  return dao.saveCollection(collection)
})
