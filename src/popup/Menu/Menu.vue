<template>
<div>
  <div class="home" v-if="!phone && !calendar && !comms && !email">
    <div style="display: flex;align-items: center; cursor: pointer;" @click="homeHref">
      <img alt="Focust Logo" src="@/assets/logo.png" class="home-img">
      <h1 style="color: grey;">Focust</h1>
    </div>
            <h1>
                Welcome Back! Control Notifications, Get Shit Done!
            </h1>
            <div class='home-w'>
                <div class="home-row">
                <div class="home-nav-btn" @click="setPhone">
                    <i class="material-icons icon-image-preview">phone</i>
                    <p>Phone</p>
                </div>
                <div class="home-nav-btn" @click="setCalendar">
                    <i class="material-icons icon-image-preview">contacts</i>
                    <p>Calendar</p>
                </div>
                <div class="home-nav-btn" @click="setComment">
                    <i class="material-icons icon-image-preview">comment</i>
                    <p>Communications Software</p>
                </div>
                </div>
                <div class="home-row" @click="setEmail">
                <div class="home-nav-btn">
                    <i class="material-icons icon-image-preview">email</i>
                    <p>Email</p>
                </div>
                <div class="home-nav-btn" @click="homeHref">
                    <i class="material-icons icon-image-preview">live_help</i>
                    <p>Help</p>
                </div>
                <div class="home-nav-btn" @click="homeHref">
                    <i class="material-icons icon-image-preview">phone_disabled</i>
                    <p>Change Information</p>
                </div>
                </div>
            </div>
  </div>
  <div v-if="phone"> 
    <Phone />
  </div>
  <div v-if="calendar"> 
    <Calendar />
  </div>
  <div v-if="comms"> 
    <Comms />
  </div>
  <div v-if="email"> 
    <Email />
  </div>
</div>
</template>

<script>
  import { mapState } from 'vuex';
  import Phone from '../Tables/Phone.vue';
  import Calendar from '../Tables/Calendar.vue';
  import Comms from '../Tables/Comms.vue';
  import Email from '../Tables/Email.vue';
    export default {
        components: {
          Phone,
          Calendar,
          Comms,
          Email,
        },
        computed: {
          ...mapState(['phone', 'calendar', 'comms', 'email'])
        },
        methods: {
          homeHref() {
            window.open('http://localhost:8080');
          },
          
          setPhone() {
            this.$store.commit('set', {
               phone: true,
            });
          },
          
          setCalendar() {
            this.$store.commit('set', {
               calendar: true,
            });
          },
          
          setComment() {
            this.$store.commit('set', {
               comms: true,
            });
          },

          setEmail() {
            this.$store.commit('set', {
               email: true,
            });
          }
        }
    }
</script>

<style lang="scss" scoped>
.home {    
    height: 530px;
    border-radius: 15px;
    display: flex;
    justify-content: center;

    &-w {
      width: 100%;
    }

    &-row {
        display: flex;
        justify-content: center;
        flex-flow: column;
        width: 100%;
    }

    &-nav {

        &-btn {    
            height: 70px;
            width: 100%;
            box-shadow: 0px 0px 3px #cacaca;
            display: flex;
            padding-left: 5px;
            align-items: center;
            color: rgb(102, 102, 102);;
            text-decoration: unset;
            transition: .3s;

            i {
                font-size: 50px;
            }

            p {
                margin: 5px;
                font-size: 18px;
            }

            &:hover {
                box-shadow: 0px 0px 7px grey;
                cursor: pointer;
            }
        }
    }
    h1 {
      color: grey;
      text-align: center;
      font-size: 20px;
    }
}
</style>
