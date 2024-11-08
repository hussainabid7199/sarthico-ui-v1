const ENV = {
  dev: {
    API_URL: 'https://sarthico-v1.vercel.app',
    CLIENT_ID: 'CCA59746667FA98D56523FAEB9110FE055D7A0336E170227171061C2038DA09133F60A6DCAB2F731',
    WEBSITE_URL: 'https://sarthico-v1.vercel.app',
    DEFAULT_PROFILE_IMAGE: '/images/user.png',
  },
  staging: {
    API_URL: 'http://localhost:3001',
    CLIENT_ID: 'D95BF9406E39035D87D9EAF4AEA05017EF02ACD1629D52220CAFDD54422A6A35',
    WEBSITE_URL: 'http://localhost:19276',
    DEFAULT_PROFILE_IMAGE: '/images/user.png',
  },
  // prod: {
  //   API_URL: 'https://api.openvio.com',
  //   CLIENT_ID: 'D95BF9406E39035D87D9EAF4AEA05017EF02ACD1629D52220CAFDD54422A6A35',
  //   WEBSITE_URL: 'https://www.openvio.com',
  //   DEFAULT_PROFILE_IMAGE: '/images/user.png',
  // },
};

const getEnvVars = () => {
  if (__DEV__) {
    return ENV.dev; // Return development environment variables
  }

  // return ENV.prod; // Return production environment variables
};

export default getEnvVars;
