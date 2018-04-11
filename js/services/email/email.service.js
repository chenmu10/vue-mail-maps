import utilService from '../util.service.js'
import storageService from '../storage.service.js'
import eventBus, { USR_MSG_DISPLAY } from '../event-bus.service.js'

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

function query(filter = {isRead: false}) {
    return storageService.load(KEY)
        .then(emails => {
            if (!emails) {
                emailsDB = dummyDB;
                console.log('emails DB:',emailsDB);
                
            }
            emailsDB = dummyDB;
            if (filter === null) return emailsDB;
            else return emailsDB.filter(email => email.isRead === filter.isRead)
        })
}

function getById(emailId) {
    return storageService.load(KEY)
        .then(emails => {
            emails = dummyDB;
            console.log('emails:',emails);
            
            return emails.find(email => email.id === emailId);
        })
}

function deleteEmail(emailId) {
    return storageService.load(KEY)
        .then(emails => {
            console.log('test');
            
            emails = dummyDB;
            var emailIdx = emails.findIndex(email => email.id === emailId);
            emails.splice(emailIdx, 1);
            console.log('delete email:',emails);
            
            // return storageService.store(KEY, emails);
        })
}


function addEmail(email) {
    return storageService.load(KEY)
        .then(emails => {
            emails = dummyDB;
            
                email.id = Date.now();
                email.sentAt = Date.now();
                email.isRead = false;

                emails.push(email);
            console.log('emails:',emails);
            
            // return storageService.store(KEY, cars);
        });
}

function getUnreadCount() {
    return storageService.load(KEY)
    .then(emails => {
        emails = dummyDB;
        let unreadEmails = emails.filter(email => email.isRead === false)
        return unreadEmails.length;
    })
    
}

// TODO : filter by subject and body. return promise.
function filterEmails(filterBy) {
    let filteredEmails = emails.filter(email => email.subject === filterBy.subject)

}

export default {
    query,
    getById,
    deleteEmail,
    addEmail,
    getUnreadCount,
    filterEmails
}
