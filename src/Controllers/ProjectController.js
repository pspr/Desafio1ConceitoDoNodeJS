const mongoose = require('mongoose');

const ProjectModel = mongoose.model('Project');

module.exports = {
    
    //this method list all projects
    async index(req,res){
       const project = await ProjectModel.find();
        return res.json(project);
    },

    //This method create a new project
    async create(req,res){
       const project = await ProjectModel.create(req.body);
        return res.json(project);
    },

    async show(req, res){
       const project = await ProjectModel.findById(req.params.id);
        return res.json(project);
    },

    async update(req,res){
       const project = await ProjectModel.findByIdAndUpdate(req.params.id, req.body, { new: true });
        return res.json(project);
    },

    async delete(req, res){
       const project = await ProjectModel.findByIdAndRemove(req.params.id);
        return res.send();
    },

    async createTarefa(rea,res){
        const project = await ProjectModel.findByIdAndUpdate(req.params.id, req.body, { new: true } );
        return res.json(project);
    }
}
