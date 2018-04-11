import utilService from '../util.service'
import storageService from '../storage.service.js'
import eventBus, { USR_MSG_DISPLAY } from '../event-bus.service'

var emailsDB = [];

var dummyDB = [
    {
        id: 1,
        subject: 'hello world',
        body: 'lorem ipsum lorem ipsum lorem ipsum lorem ipsum',
        isRead: true,
        sentAt: '11.11.17'
    },
    {
        id: 2,
        subject: 'coding academy',
        body: 'coding ipsum coding ipsum lorem coding lorem ipsum',
        isRead: false,
        sentAt: '01.10.15'
    },
    {
        id: 3,
        subject: 'lorem ipsum',
        body: 'test body lorem ipsum js ipsum lorem ipsum',
        isRead: true,
        sentAt: '11.11.17'
    },
]

const KEY = 'emailAppKey';

function query(filter = null) {
    return storageService.load(KEY)
        .then(emails => {
            if (!emails) {
                emailsDB = dummyDB;
                console.log('emails DB:',emailsDB);
                
            }
            emailsDB = dummyDB;
            if (filter === null) return emailsDB;
            else return emailsDB.filter(email => email.vendor.includes(filter.byVendor))
        })
}

function getById(emailId) {
    return storageService.load(KEY)
        .then(emails => {
            return emails.find(email => email.id === emailId);
        })
}

function deleteEmail(emailId) {
    return storageService.load(KEY)
        .then(emails => {
            var emailIdx = emails.findIndex(email => email.id === emailId);
            email.splice(emailIdx, 1);
            return storageService.store(KEY, emails);
        })
}


function saveEmail(car) {
    return storageService.load(KEY)
        .then(cars => {
            if (car.id) {
                var carIdx = cars.findIndex(currCar => currCar.id === car.id)
                cars.splice(carIdx, 1, car);
            } else {
                car.id = Date.now();
                cars.push(car);
            }
            return storageService.store(KEY, cars);
        });
}

export default {
    query,
    getById,
    deleteEmail,
    saveEmail
}
