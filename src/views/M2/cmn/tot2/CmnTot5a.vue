<script>
import SQLiteService from '@/services/SQLiteService.js'
import { useFindSummaries, useFindCollapsible, usePopUp} from "@/assets/javascript/revealText.js"
import { useRevealMedia } from "@/assets/javascript/revealMedia.js"
import { useShare} from "@/assets/javascript/share.js"


export default {
   methods:{
    async addNote(noteid){
       var noteText = document.getElementById(noteid).value
       var noteHeight = await SQLiteService.addNote(noteid, this.$route.name, noteText)
       document.getElementById(noteid).style.height = noteHeight
    },
    goToPageAndSetReturn(gotoPath){
      localStorage.setItem("returnpage", this.$route.name);
      this.$router.push({
        path: gotoPath,
      })
    },
    pageGoBack(returnto){
      if (localStorage.getItem("returnpage")) {
        returnto = localStorage.getItem("returnpage");
        localStorage.removeItem("returnpage")
      }
      this.$router.push({
        name: returnto,
      })
    },
    popUp(verse){
      usePopUp(verse)
    },
    share(what, v1, v2){
      useShare(what, v1, v2)
    },
    vuePush(id){
      this.$router.push({
        name: id,
      })
    },
  },
  async mounted() {
    localStorage.setItem("lastpage", this.$route.name)
    useFindSummaries()
    useFindCollapsible()
    useRevealMedia()
    await SQLiteService.notes(this.$route.name)
  },
}
</script>
<template>
  <div id="nav">
    <div class="nav full internal-link" @click="this.pageGoBack('cmn-tot2-index')">
        <img src="@/assets/sites/mc2/images/ribbons/mc2back.png" class="nav full" />
    </div>
</div>
<div class="page_content ltr">
<div class="block ltr">
                        <div class="chapter_number ltr"><h1>5.1.</h1></div>
                        <div class="chapter_title ltr"><h1>耶路撒冷</h1></div>
                    </div>
<div id="showVideoOptions"></div>
  <h1>耶路撒冷公元30-32</h1>

<h2>12门徒彼得雅各司提反关键经文</h2>

<p>徒2:42, 46-47都恒心遵守使徒的教训，彼此交接，擘饼，祈祷。他们天天同心合意恒切地在殿里，且在家中擘饼，存著欢喜、诚实的心用饭，赞美　神，得众民的喜爱。主将得救的人天天加给他们。</p>

<h2>门徒的实践</h2>

<!-- begin note capacitor-->
<div class="note-area">
    <form class="auto_submit_item">
      <textarea
        class="textarea resize-ta"
        @keyup="this.addNote('note1Text')"
        id="note1Text"
      ></textarea>
    </form>
</div>
<!-- end note capacitor -->


<h2>结果</h2>

<!-- begin note capacitor-->
<div class="note-area">
    <form class="auto_submit_item">
      <textarea
        class="textarea resize-ta"
        @keyup="this.addNote('note2Text')"
        id="note2Text"
      ></textarea>
    </form>
</div>
<!-- end note capacitor -->


<h2>记载/备注</h2>

<p>人数增加：持续丰收新信徒&ndash;传福音的影响力</p>


<h2>关键经文</h2>

<p>徒4:4但听道之人有许多信的，男丁数目约到五千。</p>

<h2>门徒的实践</h2>

<!-- begin note capacitor-->
<div class="note-area">
    <form class="auto_submit_item">
      <textarea
        class="textarea resize-ta"
        @keyup="this.addNote('note3Text')"
        id="note3Text"
      ></textarea>
    </form>
</div>
<!-- end note capacitor -->


<h2>结果</h2>

<!-- begin note capacitor-->
<div class="note-area">
    <form class="auto_submit_item">
      <textarea
        class="textarea resize-ta"
        @keyup="this.addNote('note4Text')"
        id="note4Text"
      ></textarea>
    </form>
</div>
<!-- end note capacitor -->


<h2>记载/备注</h2>

<p>归信</p>


<h2>关键经文</h2>

<p>徒5:42他们就每日在殿里、在家里不住地教训人，传耶稣是基督。</p>

<h2>门徒的实践</h2>

<!-- begin note capacitor-->
<div class="note-area">
    <form class="auto_submit_item">
      <textarea
        class="textarea resize-ta"
        @keyup="this.addNote('note5Text')"
        id="note5Text"
      ></textarea>
    </form>
</div>
<!-- end note capacitor -->


<h2>结果</h2>

<!-- begin note capacitor-->
<div class="note-area">
    <form class="auto_submit_item">
      <textarea
        class="textarea resize-ta"
        @keyup="this.addNote('note6Text')"
        id="note6Text"
      ></textarea>
    </form>
</div>
<!-- end note capacitor -->


<h2>记载/备注</h2>

<p>经常地训练、教导和讲道</p>


<h2>关键经文</h2>

<p>徒6:1-2那时，门徒增多，有说希腊话的犹太人向希伯来人发怨言，因为在天天的供给上忽略了他们的寡妇。十二使徒叫众门徒来，对他们说：&ldquo;我们撇下　神的道去管理饭食，原是不合宜的。</p>

<h2>门徒的实践</h2>

<!-- begin note capacitor-->
<div class="note-area">
    <form class="auto_submit_item">
      <textarea
        class="textarea resize-ta"
        @keyup="this.addNote('note7Text')"
        id="note7Text"
      ></textarea>
    </form>
</div>
<!-- end note capacitor -->


<h2>结果</h2>

<!-- begin note capacitor-->
<div class="note-area">
    <form class="auto_submit_item">
      <textarea
        class="textarea resize-ta"
        @keyup="this.addNote('note8Text')"
        id="note8Text"
      ></textarea>
    </form>
</div>
<!-- end note capacitor -->


<h2>记载/备注</h2>

<p>认真看待身心健全的需要</p>


<h2>关键经文</h2>

<p>徒6:7神的道兴旺起来；在耶路撒冷门徒数目加增的甚多，也有许多祭司信从了这道。</p>

<h2>门徒的实践</h2>

<!-- begin note capacitor-->
<div class="note-area">
    <form class="auto_submit_item">
      <textarea
        class="textarea resize-ta"
        @keyup="this.addNote('note9Text')"
        id="note9Text"
      ></textarea>
    </form>
</div>
<!-- end note capacitor -->


<h2>结果</h2>

<!-- begin note capacitor-->
<div class="note-area">
    <form class="auto_submit_item">
      <textarea
        class="textarea resize-ta"
        @keyup="this.addNote('note10Text')"
        id="note10Text"
      ></textarea>
    </form>
</div>
<!-- end note capacitor -->


<h2>记载/备注</h2>

<p>倍增、传福音 影响力和增长</p>

<p><br />
其他关键事件：彼得和约翰在公会前（徒4），监禁，鞭打，释放（徒5）。司提反的申诉与死亡（徒7）</p>

<p>教会/会众：徒5:11；7:38；8:1；8:3;</p>

<p>&nbsp;</p>


<!-- begin sdcard languageFooterDiscrete -->
<!-- end sdcard languageFooterDiscrete -->
</div><!--- Created by publishPage-->

</template>
<!-- begin sdcard Footer -->
<!-- end sdcard Footer -->