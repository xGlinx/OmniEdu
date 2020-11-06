export default class WorkSchema {
    static schema = {
        name: 'Work',
        primaryKey: 'id',
        properties: {
            id: { type: 'int', indexed: true},
            name: 'string',
            type: 'string',
            size: 'int',
        }
    }
}