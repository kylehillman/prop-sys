import Realm from "realm";

export const engineSchema = {
    name: 'engine',
    properties: {
        _id: 'objectId?',
        Mdot: 'int?',
        name: 'string?',
        thrust: 'int?',
    },
    primaryKey: '_id',
};

const realm = await Realm.open({
    schema: [engineSchema],
});


const engine = realm.objects("engineSchema");
console.log(`There are ${engineSchema.length} engines`);
