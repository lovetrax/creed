export const employee = () => {
    return {
        id: {
            type: 'integer',
            primaryKey: true
        },
        firstName: {
            type: 'string',
            length: 50,
        },
        lastName: {
            type: 'string',
            length: 50
        },
        employerId: {
            type: 'integer',
            foreignKey: {
                table: 'employer',
                key: 'id'
            }
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