import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    crea: [
      {
        title: "Figma",
        url: "https://www.figma.com/",
        icon: "../assets/figma.png",
      },
      {
        title: "Campagnes M6 Vidéo",
        url: "https://docs.google.com/spreadsheets/d/1ZEMK1OaQIxcDFtBsbnFaYqbjpVa5Xr0VdBP55-u800w/edit#gid=128572623",
        icon: "../assets/planning.png",
      },
      {
        title: "Campagnes Metropolitan Films",
        url: "https://docs.google.com/spreadsheets/d/1-1oHcsZhg7PUobKt4KLkH2NSoJg1_qkbBrJCaubyR1w/edit#gid=85",
        icon: "../assets/planning.png",
      },
    ],

    dev: [
      {
        title: "Bitbucket",
        url: "https://bitbucket.org/dashboard/repositories",
        icon: "../assets/bitbucket.png",
      },
      {
        title: "Composer La Jungle",
        url: "https://composer.lajungle.net/",
        icon: "../assets/composer.png",
      },
      {
        title: "doc Interne",
        url: "http://tracker.lajungle.fr/projects/interne/wiki",
        icon: "../assets/tracker_ljd.png",
      },
      {
        title: "Wpackagist",
        url: "https://wpackagist.org/",
        icon: "../assets/composer.png",
      },
      {
        title: "doc iquitos(Themosis)",
        url: "http://tracker.lajungle.fr/projects/themosis/wiki",
        icon: "../assets/tracker_ljd.png",
      },
      {
        title: "Snippet bitbucket",
        url: "https://bitbucket.org/dashboard/snippets?status=all",
        icon: "../assets/bitbucket.png",
      },
      {
        title: "Jakku",
        url: "http://jakku.lajungle.info/",
        icon: "../assets/jakku.png",
      },
      {
        title: "doc Loreto",
        url: "http://tracker.lajungle.fr/projects/loreto-loretheme/wiki",
        icon: "../assets/tracker_ljd.png",
      },
      {
        title: "AlwayData",
        url: "http://devlj.alwaysdata.net/jakku/",
        icon: "../assets/alwaysdata.png",
      },
      {
        title: "psr PHP",
        url: "https://www.php-fig.org/psr/",
        icon: "../assets/PSR.png",
      },
      {
        title: "TypeRocket",
        url: "https://typerocket.com/wordpress-mvc-with-typerocket-for-admin-tutorial",
        icon: "../assets/typerocket.png",
      },
      {
        title: "Wordplate Acf",
        url: "https://github.com/wordplate/extended-acf",
        icon: "../assets/wordplate-acf.png",
      },
      {
        title: "Generateur Cron",
        url: "https://crontab-generator.org/",
        icon: "../assets/cron.png",
      }
    ],

    inte: [
      {
        title: "Bitbucket",
        url: "https://bitbucket.org/dashboard/overview",
        icon: "../assets/bitbucket.png",
      },
      {
        title: "Snippet bitbucket",
        url: "https://bitbucket.org/dashboard/snippets?status=all",
        icon: "../assets/bitbucket.png",
      },
      {
        title: "BrowserStack",
        url: "https://live.browserstack.com/dashboard#os=android&os_version=11.0&device=Samsung+Galaxy+S21&zoom_to_fit=true&full_screen=true&url=www.browserstack.com%2Fwelcome&speed=1",
        icon: "../assets/browserstack.png",
      },
    ],

    gestion: [
      {
        title: "Monday",
        url: "https://lajungle.monday.com/",
        icon: "../assets/monday.png",
      },
      {
        title: "Dashboard",
        url: "https://dashboard.lajungle.net/v2/timesheet",
        icon: "../assets/dashboard.png",
      },
      {
        title: "TMA",
        url: "https://docs.google.com/spreadsheets/d/1CejmPVXW_sISoyN6oWpmH8AR__qWhZlW5YEwRCvUV9k/edit#gid=1204689262",
        icon: "../assets/tma.png",
      },
      {
        title: "Planning",
        url: "https://docs.google.com/spreadsheets/d/1CejmPVXW_sISoyN6oWpmH8AR__qWhZlW5YEwRCvUV9k/edit#gid=1447752078",
        icon: "../assets/planning.png",
      },
      {
        title: "Présences en agence",
        url: "https://docs.google.com/spreadsheets/d/12SxVSVP7eYysXeSfFnT5KGJx8-NCVMJPT-r_4u4aqU0/edit#gid=0",
        icon: "../assets/planning.png",
      },
      {
        title: "Google MEET",
        url: "https://meet.google.com/new",
        icon: "../assets/googlemeet.png",
      },
      {
        title: "Google Agenda",
        url: "https://calendar.google.com",
        icon: "../assets/googleagenda.png",
      },
      {
        title: "Tracker la jungle",
        url: "http://tracker.lajungle.fr/projects",
        icon: "../assets/tracker_ljd.png",
      },
      {
        title: "NASS",
        url: "https://cloud.lajungle.info:34601/",
        icon: "../assets/dsm.png",
      },
      {
        title: "Slack",
        url: "https://app.slack.com/client/T04TA0W4Y/learning-slack",
        icon: "../assets/slack.png",
      },
      {
        title: "Google drive project",
        url: "https://drive.google.com/drive/folders/1qui00Jiit7OtK8i2fEVoze62YOE37Ntc",
        icon: "../assets/google.png",
      },
      {
        title: "Tracker Tequila",
        url: "https://tracker.tki.la/projects",
        icon: "../assets/tracker_tekila.png",
      },
      {
        title: "Mail",
        url: "https://mail.google.com/mail/u/0/",
        icon: "../assets/googlemail.png",
      },
    ],
    
    seo: [
      {
        title: "Google Analytics",
        url: "https://analytics.google.com/analytics/web/",
        icon: "../assets/googleanalytics.png",
      },
      {
        title: "Semrush",
        url: "https://fr.semrush.com/dashboard/",
        icon: "../assets/semrush.png",
      },
      {
        title: "Search Console",
        url: "https://search.google.com/search-console/",
        icon: "../assets/searchconsole.png",
      },
    ],

    projects: [],

  },
  mutations: {

    SAVE_PROJECT( state ) {
      console.log("SAVE_PROJET");
      Vue.localStorage.set("projects", JSON.stringify( state.projects ));
    },

    LOAD_PROJECT( state ) {
      console.log("LOAD_PROJET");
      if( Vue.localStorage.get("projects") ) {
        state.projects = JSON.parse( Vue.localStorage.get("projects"));
      } else {
        state.projects = [];
      }
    },

    NEW_PROJECT( state, payload)  {
      state.projects.push({
        payload,
      });
    },

    UPDATE_PROJECT( state, payload ) {
      state.projects.forEach(element => {
        if( element.payload.projectName == payload.projectName ) {
          element.payload = payload;
        }
      });
    }
    
  },
  actions: {

    loadProject({ commit }) {
      commit( "LOAD_PROJECT" );
    },

    createNewProject ({ commit }, payload) {
      commit( "NEW_PROJECT", payload );
      commit( "SAVE_PROJECT" );
      commit( "LOAD_PROJECT" );
    },

    updateProject({ commit }, payload ) {
      commit( "UPDATE_PROJECT", payload );
      commit( "SAVE_PROJECT" );
    }

  },

  modules: {

  },

});
