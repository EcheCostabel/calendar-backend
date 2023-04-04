const Event = require('../models/Event')

const getEvents = async(req, res) => {

    const events = await Event.find()
                              .populate('user', 'name'); //esto es para ver de user solo el name en postman
    res.json({
        ok: true,
        events
    })
};



const createEvent = async(req, res) => {

    const event = new Event(req.body);

    try {

        event.user = req.uid;

      const savedEvent = await event.save();

       res.json({
        ok: true,
        event : savedEvent
       })
        
    } catch (error) {
        console.log(error);
        res.status(500).json({
            ok: false,
            msg: 'Comuniquese con el administrador'
        })
    }

};



const updateEvent = async(req, res) => {

    const eventId = req.params.id;
    const uid = req.uid;
    try {
        const event = await Event.findById(eventId);

        if (!event) {
           return res.status(404).json({
                ok: false,
                msg: 'Evento no existe con ese id'
            })
        }

        if(event.user.toString() !== uid) {
            return res.status(401).json({
                ok: false,
                msg: 'No tiene permiso para editar este evento'
            })
        }

        const newEvent = {
            ...req.body,
            user: uid
        }

        const eventUpdated = await Event.findByIdAndUpdate(eventId, newEvent, {new: true});

        res.json({
            ok: true,
            event: eventUpdated
        })
        
    } catch (error) {
        console.log(error);
        res.status(500).json({
            true: false,
            msg: 'Comuniquese con el administrador'
        })
    }


    
};



const deleteEvent = async(req, res) => {

    const eventId = req.params.id;
    const uid = req.uid;


    try {
        const event = await Event.findById(eventId);

        if (!event) {
          return res.status(404).json({
                ok: false,
                msg: 'Evento no existe con ese id'
            })
        };

        if(event.user.toString() !== uid) {
            return res.status(401).json({
                ok: false,
                msg: 'No tiene permiso para eliminar este evento'
            })
        };

       

       await Event.findByIdAndDelete(eventId);

        res.json({
            ok: true,
        })
        
    } catch (error) {
        console.log(error);
        res.status(500).json({
            true: false,
            msg: 'Comuniquese con el administrador'
        })
    }

    
   
};


module.exports = {
    getEvents,
    createEvent,  
    updateEvent,
    deleteEvent
}