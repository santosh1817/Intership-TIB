const express=require('express')
const router=express.Router()

const {activitiesRouter}=require('../controllers/ActivitiesController')
const {toursRouter}=require('../controllers/ToursController')
const {toursHistoryRouter}=require('../controllers/ToursHistoryController')


//console.log('hi')
router.use('/activities',activitiesRouter)
router.use('/tours',toursRouter)
router.use('/tours/history',toursHistoryRouter)




module.exports={
    routes:router
}