'use strict';

/**
 * Collection Interface, this provides an abstraction for bahaviors we expect any API data would want to perform, regardless of dialect and 
 */

class Collection {
    constructor(model) {
        this.model = model;
    }
    async create(json) {
        try {
            let record = await this.model.create(json);

            return record;
        } catch (e) {
            console.error('Error creating data for model : ' + this.model.name);
            return e;
        }
    }

    async read(id, options = {}) {
        let record;

        try {
            if (id) {
                options['where'] = { id };
                record = await this.model.findOne(options);
            } else {
                record = await this.model.findAll(options);
            }
            return record
        } catch (e) {
            console.error(`Error reading data from model: ${this.model.name}`);
            return e;
        }
    }
    async update(id, json) {
        try {
            if (!id) throw new Error(`No record ID prvoided for model: ${this.model.name} `);

            let record = await this.model.findOne({ where: { id }});
            let updatedRecord = await record.update(json);
            return updatedRecord;
        } catch (e) {
            console.error(`Error updating model: ${this.model.name}`);
            return e;
        }
    }

    async delete(id) {
        try {
            if (!id) throw new Error(`No record ID prvoided for model: ${this.model.name} `);

            let deletedRecord = await this.model.destroy({ where : { id }});
            return deletedRecord;
        } catch (e) {
            console.error(`Error deleting on model: ${this.model.name}`);
        }
    }
}

module.exports = Collection;