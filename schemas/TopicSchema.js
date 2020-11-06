export default class WorkSchema {
    static schema = {
        name: 'Topic',
        primaryKey: 'id',
        properties: {
            id: { type: 'int', indexed: true},
            name: 'string',
            size: 'int',
        }
    }
}