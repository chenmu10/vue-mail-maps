import utilService from '../util.service.js'
import storageService from '../storage.service.js'
import eventBus, { USR_MSG_DISPLAY } from '../event-bus.service.js'

var emailsDB = [];

var dummyDB = [
    {
        id: 1,
        subject: 'subject one',
        body: 'the first email is this',
        isRead: true,
        sentAt: '11.11.17'
    },
    {
        id: 2,
        subject: 'coding academy',
        body: 'coding ipsum coding ipsum lorem coding lorem ipsum',
        isRead: false,
        sentAt: moment(Date.now()).format('LT')
    },
    {
        id: 3,
        subject: 'third subject',
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
                emails = dummyDB;
                storageService.store(KEY, emails)
            }

            emailsDB = emails;

            if (filter === null) {
                return emailsDB;
            } else {
                let filteredEmails = filterEmails(filter);
                return filteredEmails;
            }
            
        })


}

function filterEmails(filter) {
    
    let filteredEmails = emailsDB

    if (filter.byRead !== 'all') {
        let isReadFilter = (filter.byRead === 'read')
        filteredEmails = emailsDB.filter(email => email.isRead === isReadFilter)
    }
    filteredEmails = filteredEmails.filter(email => email.subject.includes(filter.byText)  || email.body.includes(filter.byText) );
    return filteredEmails;

}


function getById(emailId) {
    return storageService.load(KEY)
        .then(emails => {
            emails = dummyDB;
            console.log('emails:', emails);

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
            console.log('delete email:', emails);

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
            console.log('emails:', emails);

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



export default {
    query,
    getById,
    deleteEmail,
    addEmail,
    getUnreadCount,
    filterEmails
}
