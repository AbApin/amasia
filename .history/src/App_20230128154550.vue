<template>
  <div id="app">
    <div class="header">
      <h2 class="xanutnerTitle">Xanutner</h2>
      <h2 class="apranqnerTitle">Apranqner</h2>
      <div class="cuycTal">
        <button class="cuycTalBtn">ցույց տալ ընդհանուրը</button>
        <button class="heracnelBtn">հեռացնել ամեն ինչ</button>
      </div>
      <div class="endhanurQanak">
        <ul class="endhanurQanakiList">
          <!-- <li v-for="qanakItem in xanutner" :key="" class="endhanurQanakiListItem"></li> -->
        </ul>
      </div>
    </div>
    <div class="content">
      <ul class="contentList">
        <li v-for="xanutiAnun in Object.keys(XANUTNER)" :key="xanutiAnun" class="contentItem">
          <p class="xanutiAnun">{{ xanutiAnun }}</p>
          <ul class="apranqneriList">
            <li
              v-for="(apranq, apranqiHamar) in XANUTNER[xanutiAnun]"
              :key="apranqiHamar"
              class="apranqneriListItem"
            >
              <div class="apranqiText">
                <p class="apranqiAnun">{{ apranq.anun }}</p>
                <p class="apranqiQanak">{{ apranq.qanak }}</p>
              </div>
              <div class="apranqiAvelPakas">
                <button class="plus apranqiBtn" @click="AVELACNEL({ xanutiAnun, apranqiHamar })">
                  +
                </button>
                <button class="minus apranqiBtn" @click="PAKASACNEL({ xanutiAnun, apranqiHamar })">
                  -
                </button>
              </div>
            </li>
          </ul>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapMutations } from 'vuex';
export default {
  name: 'App',
  components: {},
  data() {
    return {};
  },
  mounted() {},
  methods: {
    ...mapMutations(['AVELACNEL', 'PAKASACNEL']),
    // avelacnel(obj) {
    //   this.AVELACNEL(obj);
    // },
    // pakasacnel(obj) {
    //   this.PAKASACNEL(obj);
    // },
  },
  computed: {
    ...mapGetters(['XANUTNER']),
  },
};
</script>

<style>
*,
*::after,
*::before {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
ul {
  list-style: none;
}
#app {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}
.header {
  display: flex;
  justify-content: space-between;
  width: 100%;
}
.xanutnerTitle {
  width: 10%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: 'Inter';
  font-size: 22px;
  font-weight: 700;
  letter-spacing: 3px;
  padding: 20px 30px;
  border: 1px solid #000;
  border-top: 0;
  border-left: 0;
}
.apranqnerTitle {
  width: 60%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: 'Inter';
  font-size: 22px;
  font-weight: 700;
  letter-spacing: 3px;
  padding: 20px 30px;
  border: 1px solid #000;
  border-top: 0;
  border-left: 0;
}
.contentList {
  display: flex;
  flex-direction: column;
}
.contentItem {
  display: flex;
  justify-content: space-between;
}
.xanutiAnun {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 10%;
  font-family: 'Inter';
  font-size: 20px;
  font-weight: 700;
  letter-spacing: 3px;
  word-wrap: break-word;
  padding: 20px 30px;
  border: 1px solid #000;
  border-top: 0;
  border-left: 0;
}
.apranqneriList {
  width: 90%;
  display: flex;
  justify-content: space-between;
}
.apranqneriListItem {
  display: flex;
  flex-direction: column;
  flex: 1 1 0;
  border: 1px solid #000;
  border-top: 0;
  border-left: 0;
}
.apranqiText {
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 50%;
}
.apranqiAnun {
  font-family: 'Inter';
  font-size: 15px;
  font-weight: 500;
  word-wrap: break-word;
  text-align: center;
  width: 60%;
  border-right: 1px solid #000;
}
.apranqiQanak {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 40%;
}
.apranqiAvelPakas {
  display: flex;
  justify-content: space-between;
  width: 100%;
  height: 50%;
}
.apranqiBtn {
  display: inline-flex;
  justify-content: center;
  align-items: center;
  font-family: 'Inter';
  font-size: 30px;
  font-weight: 700;
  letter-spacing: 3px;
  border: none;
  color: #fff;
  width: 50%;
  cursor: pointer;
}
.plus {
  background: green;
}
.minus {
  background: red;
}
.cuycTal {
  width: 25%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 15px;
}
.heracnelBtn,
.cuycTalBtn {
  display: inline-block;
  padding: 10px;
  border: none;
  color: #fff;
  text-transform: capitalize;
  cursor: pointer;
  tr
}
.heracnelBtn {
  background: red;
}
.cuycTalBtn {
  background: green;
}
</style>
