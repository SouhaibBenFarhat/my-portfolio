import fetchJsonp from 'fetch-jsonp'

const userId = '1043127816';
const accessToken = '1043127816.d0d4c6e.ddb0bbaf44f3495a832f8ae47e95fad7';

export default function GetInstagramFeed() {
    return new Promise((resolve, reject) => {
        fetchJsonp('https://api.instagram.com/v1/users/' + userId + '/media/recent?access_token=' + accessToken + '&count=20')
            .then(data => data.json())
            .then(json => {
                if (json) {
                    resolve(json)
                } else {
                    reject()
                }
            });
    })
};