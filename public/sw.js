importScripts('/statics/js/setting.js');
importScripts('/statics/js/dexie.js');
importScripts('/statics/js/db.js');
//import { db } from "./statics/js/db.js"

//let SERVER_ADDRESS = 'http://192.168.1.103:8080/';
let CACHE_VERSION = 1.04;

let CURRENT_CACHE = {
    static : 'static-cache-v' + CACHE_VERSION,
    dynamic : 'dynamic-cache-v' + CACHE_VERSION
};

self.addEventListener('install'  , (event) => {
    console.log('installing service worker' , event);
    event.waitUntil(
        caches.open(CURRENT_CACHE['static'])
            .then((cache) => {
                cache.addAll([
                    '/',
                    '/statics/js/db.js',
                ]);
            })
    )
})


self.addEventListener('activate'  , (event) => {
    console.log('activating service worker' , event);
    let expectedCacheNames = Object.values(CURRENT_CACHE);

    event.waitUntil(
        caches.keys().then(cacheNames => {
            return Promise.all(
                cacheNames.forEach(cacheName => {
                    if(! expectedCacheNames.includes(cacheName)) {
                        console.log('Deleting out of date cache:' , cacheName);

                        return caches.delete(cacheName);
                    }
                })
            )
        })
    )

});

// self.addEventListener('fetch' , (event) => {
//     event.respondWith(
//         caches.open(CURRENT_CACHE['static']).then((cache) => {
//             return cache.match(event.request).then(response => {
//                 if(response) {
//                     console.log('Found response in cache:' , response);

//                     return response;
//                 }  

//                 console.log('Fetching request from the network');

//                 return fetch(event.request).then(networkResponse => {
//                     cache.put(event.request , networkResponse.clone());

//                     return networkResponse;
//                 }).catch(err => {
//                     console.log('error in fetch handler:' , err);
//                     throw err;
//                 })
//             })
//         })
//     )
// });



self.addEventListener('fetch' 

, (event) => {
    let urls = [
        SERVER_ADDRESS + 'api/v1/personlogs',
        SERVER_ADDRESS + 'api/v1/trackings',
        SERVER_ADDRESS + 'api/v1/reports'
    ]

    console.log(event.request.url);
    if(urls.indexOf(event.request.url) > -1) {
        return event.respondWith(
            fetch(event.request)
                .then(response => {
                    console.log(response);
                    let cloneRes = response.clone();
                    
                    if(event.request.url == SERVER_ADDRESS + 'api/v1/personlogs')
                    {
                        response.json()
                        .then(res => {
                            let personlogs = res.data;
                            personlogs.forEach(personlog => {
                                //console.log(personlog);
                                db.personlogs.put(personlog);
                            })
                        })
                    } 
                    else if(event.request.url == SERVER_ADDRESS + 'api/v1/trackings')
                    {
                        response.json() 
                        .then(res => {
                            let trackings = res.data;
                            trackings.forEach(tracking => {
                                //console.log(tracking);
                                db.trackings.put(tracking);
                            })
                        })
                    }
                    else if(event.request.url == SERVER_ADDRESS + 'api/v1/reports')
                    {
                        response.json() 
                        .then(res => {
                            let reports = res.data;
                            reports.forEach(report => {
                                //console.log(report);
                                db.reports.put(report);
                            })
                        })
                    }

                    return response;
                })
        )
    } else {
        console.log('cache first')

       return event.respondWith(
            caches.match(event.request).then(response => {
                if(response) return response;

                return fetch(event.request)
                            .then(networkResponse => {
                                return caches.open(CURRENT_CACHE['dynamic'])
                                    .then(cache => {
                                        cache.put(event.request , networkResponse.clone());
                                        return networkResponse;
                                    })
                            })
                            .catch(err => {
                                return caches.open(CURRENT_CACHE['static'])
                                                .then(cache =>{ 
                                                    return cache.match('/offline.html');
                                                })
                            })
            })
       )
    }

    
});



self.addEventListener('sync' , function(event) {
    console.log('background syncing:' , event);
    //sync-new-personlog
    if(event.tag == 'sync-new-personlog') {
        event.waitUntil(
            db.syncPersonlogs.toArray()
                .then(syncPersonlogs => {
                    syncPersonlogs.forEach(personlog => {
                        let fd = new FormData();
                        console.log('name: '+ personlog.name);
                        fd.append('user' , personlog.user);
                        fd.append('name' , personlog.name);
                        fd.append('code' , personlog.code);
                        fd.append('tel' , personlog.tel);
                        fd.append('letter' , personlog.letter);
                        fd.append('datetime' , personlog.datetime);
                        fd.append('place' , personlog.place);
                        fd.append('type' , personlog.type);
                        fd.append('desc' , personlog.desc);
                        fd.append('image' , personlog.image + '.png');
                        //fd.append('image' , personlog.image , Date.now() + '.png');

                        fetch(SERVER_ADDRESS + 'api/v1/registerPersonlog' , {
                            method : 'POST',
                            body : fd
                        })
                        .then(res => res.json())
                        .then(res => {
                            console.log('response on the sync' , res)
                            if(res.success == true) {
                                db.syncPersonlogs
                                    .where({ name : personlog.name })
                                    .delete()
                                    .then(() => {
                                        console.log('delete item from syncPersonlogs' , personlog)
                                    });
                            }
                        })
                        .catch(err => {
                            console.log('err from service worker sync proccess' , err)
                        })
                    })
                })
        )
    }
    //sync-new-tracking
    if(event.tag == 'sync-new-tracking') {
        event.waitUntil(
            db.syncTrackings.toArray()
                .then(syncTrackings => {
                    syncTrackings.forEach(tracking => {
                        let fd = new FormData();
                        console.log('tracking code: '+ tracking.code);
                        fd.append('user' , tracking.user);
                        fd.append('code' , tracking.code);
                        fd.append('lat' , tracking.lat);
                        fd.append('lng' , tracking.lng);
                        fd.append('datetime' , tracking.datetime);
                        fd.append('place' , tracking.place);
                        fd.append('type' , tracking.type);

                        fetch(SERVER_ADDRESS + 'api/v1/registerTracking' , {
                            method : 'POST',
                            body : fd
                        })
                        .then(res => res.json())
                        .then(res => {
                            console.log('response on the sync' , res)
                            if(res.success == true) {
                                db.syncTrackings
                                    .where({ _id : tracking._id })
                                    .delete()
                                    .then(() => {
                                        console.log('delete item from syncTrackings' , tracking)
                                    });
                            }
                        })
                        .catch(err => {
                            console.log('err from service worker sync proccess' , err)
                        })
                    })
                })
        )
    }
    //sync-new-report
    if(event.tag == 'sync-new-report') {
        event.waitUntil(
            db.syncReports.toArray()
                .then(syncReports => {
                    syncReports.forEach(report => {
                        let fd = new FormData();
                        console.log('report title: '+ report.title);
                        fd.append('user' , report.user);
                        fd.append('title' , report.title);
                        fd.append('desc' , report.desc);
                        fd.append('datetime' , report.datetime);
                        fd.append('place' , report.place);

                        fetch(SERVER_ADDRESS + 'api/v1/registerReport' , {
                            method : 'POST',
                            body : fd
                        })
                        .then(res => res.json())
                        .then(res => {
                            console.log('response on the sync' , res)
                            if(res.success == true) {
                                db.syncReports
                                    .where({ _id : report._id })
                                    .delete()
                                    .then(() => {
                                        console.log('delete item from syncReports' , report)
                                    });
                            }
                        })
                        .catch(err => {
                            console.log('err from service worker sync proccess' , err)
                        })
                    })
                })
        )
    }
})

self.addEventListener('notificationclick' , (event) => {
    let notification = event.notification;
    let action = event.action;
    let data = notification.data;

    notification.close();

    switch (event.action) {
        case 'download-action':
            promiseCahin = clients.openWindow(data.url)
            break;
        case 'show-action':
            promiseCahin = clients.openWindow(data.url)
            break;
        default:
            promiseCahin = clients.openWindow(data.url)
            break;
    }

    event.waitUntil(promiseCahin);
})

self.addEventListener('push' , (event) => {
    const DEFAULT_TAG = 'simple-notification';

    let data = event.data.json();

    let title = data.notification.title;
    let options = data.notification;

    if(! options.tag ) {
        options.tag = DEFAULT_TAG;
    }

    event.waitUntil(registration.showNotification(title , options))
})