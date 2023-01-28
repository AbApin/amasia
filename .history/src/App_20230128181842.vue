<template>
  <div id="app">
    <div class="header">
      <h2 class="xanutnerTitle">Xanutner</h2>
      <h2 class="apranqnerTitle">Apranqner</h2>
      <div class="cuycTal">
        <button class="cuycTalBtn" @click="isClick = true">ցույց տալ ընդհանուրը</button>
        <button class="heracnelBtn" @click="REMOVEALL">հեռացնել ամեն ինչ</button>
      </div>
      <div v-show="isClick" class="endhanurQanak">
        <button @click="isClick = false" class="closeBtn">X</button>
        <div class="endhanurQanakInner" :class="!ISEMPTY ? 'ovAuto' : ''">
          <p v-if="ISEMPTY" class="noProducts">Ոչ մի ապրանք</p>
          <ul class="endhanurQanakiList">
            <li
              v-for="xanutiAnun in Object.keys(ZAKAZNER)"
              :key="xanutiAnun"
              class="endhanurQanakiListItem"
            >
              <p class="endhanurQanakiListItemXanutiAnun">{{ xanutiAnun }}</p>
              <ul class="endhanurApranqneriList">
                <li
                  v-for="endhanurApranq in ZAKAZNER[xanutiAnun]"
                  :key="endhanurApranq.anun"
                  class="endhanurApranqneriListItem"
                >
                  <p class="endhanurApranqneriListItemAnun">{{ endhanurApranq.anun }}</p>
                  <p class="endhanurApranqneriListItemQanak">{{ endhanurApranq.qanak }}</p>
                </li>
              </ul>
            </li>
          </ul>
        </div>
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
    return {
      isClick: true,
      isEmpty: true,
    };
  },
  beforeMount() {
    this.INITIAL();
  },
  methods: {
    ...mapMutations(['AVELACNEL', 'PAKASACNEL', 'INITIAL', 'REMOVEALL']),
  },
  computed: {
    ...mapGetters(['XANUTNER', 'ZAKAZNER', 'ISEMPTY']),
    isEmptyOr() {
      
    }
  },
};
</script>

<style>
@import './app.css';
</style>
