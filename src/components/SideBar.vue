<template>
    <menu>
        <div class="Porojectus">
            <span class="uppercase">projectus</span>
            <button class="search"></button>
        </div>
        <div class="sub-menu">
            <div class="User">
                <img src="../assets/img/user.jpg" alt="photo user">
                <div class="userName">
                    <div>
                        <span class="user">{{user.name}}</span>
                        <span class="statusUser">{{user.status}}</span>
                    </div>
                    <a href="#" class="touch">&bull;&bull;&bull;</a>
                </div>
            </div>
        </div>

        <div class="work">
            <div class="one res" v-click="" >
                <span class="completed" @click="click()">{{work.numCompleted}}</span>
                <p>{{work.Completed}}</p>
            </div>
            <div class="res two">
                <span class="open">{{work.numOpen}}</span>
                <p>{{work.Open}}</p>
            </div>
        </div>

        <ul class="menu">
            <li><a href="#" class="MENU uppercase">{{MENU}}</a></li>
            <li><a href="#" class="Home uppercase">{{HOME}}</a></li>
            <li><a href="#" class="Tasks ">{{MyTasks}}</a></li>
            <li><a href="#" class="Notifications">{{Notifications}}<div>{{numNot}}</div></a></li>
        </ul>
    </menu>
</template>

<script>
import { bus } from '../main';

console.log(bus);// eslint-disable-line no-console
console.log(bus);// eslint-disable-line no-console
console.log(bus);// eslint-disable-line no-console
export default {
  name: 'SideBar',
  data() {
    return {
      user: {
        name: 'Jean Gonzales',
        status: 'Product Owner',
      },
      work: {
        Completed: 'Competed Tasks',
        numCompleted: '372',
        Open: 'Open Tasks',
        numOpen: '11',
      },
        MENU: 'menu',
        HOME: 'home',
        MyTasks: 'My Tasks',
        Notifications: 'Notifications',
        numNot: ' ',
    };
  },
  created() {
    bus.$on('message', (data) => {
      this.numNot = data;
    });
  },
  methods: {
    click() {
      if (this.work.numOpen !== 0) {
        if (confirm('Are you sure you want to change the number of tasks?')) {
          this.work.numCompleted++;
          this.work.numOpen--;
        }
      } else {
        alert('No :)');
      }
    },
  },
};

</script>

<style scoped>

</style>
