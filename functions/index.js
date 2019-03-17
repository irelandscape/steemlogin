const admin = require('firebase-admin');
const functions = require('firebase-functions');
// To allow browser to make cross origin access requests
const cors = require('cors')({origin: true})

admin.initializeApp()

function deleteAuthCodes (uid) {
  const db = admin.firestore()

  return db.collection('authCodes').where('uid', '==', uid)
    .get()
    .then((querySnapshot) => {
      let batch = db.batch()
      querySnapshot.forEach((doc) => {
        batch.delete(doc.ref)
      })
      return batch.commit()
    })
}

// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
exports.authDetails = functions.https.onRequest((request, response) => {
  return cors(request, response, () => {
    if (request.method !== 'GET') {
      response.status(405).end()
    }

    if (!request.query.authCode) {
      response.status(400).end()
      return
    }

    const db = admin.firestore()
    db.collection('authCodes').doc(request.query.authCode)
      .get()
      .then((doc) => {
        if (doc.exists) {
          const authDetails = doc.get('authDetails')
          //doc.ref.delete()
          deleteAuthCodes(doc.get('uid'))
          response.status(200).json(JSON.stringify(authDetails))
        } else {
          console.log(request.query.authCode + ' doesnt exist!')
          response.status(200).json({})
        }

        return doc
      }).catch((error) => {
        console.log(error)
        response.status(500).end()
      })
  })
});
