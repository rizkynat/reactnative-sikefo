import fetch from 'node-fetch'

const getDataKas = async () => {
    try {
      const response = await fetch(`http://5583-112-215-201-42.ngrok.io/api/baseconfig`);
      const json = await response.json();
      console.log(json.data)
    } catch (error) {
      console.error(error);
    }
  }

  console.log(getDataKas())

  /*
  "android": {
    "buildType": "apk"
  },*/