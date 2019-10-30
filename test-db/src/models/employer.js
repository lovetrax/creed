export const employer = () => {
    return {
        id: {
            type: 'integer',
            primaryKey: true
        },
        name: {
            type: 'string',
            length: 100,
        },
        updatedAt: {
            type: 'datetime',
            default: 'current_timestamp'
        },
        createdAt: {
            type: 'datetime',
            default: 'current_timestamp'
        }
    }
};