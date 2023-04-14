<script>
import SQLiteService from '@/services/SQLiteService.js'
import { useFindSummaries, useFindCollapsible, usePopUp} from "@/assets/javascript/revealText.js"
import { useRevealMedia } from "@/assets/javascript/revealMedia.js"
import { useShare} from "@/assets/javascript/share.js"
import VueImageZoomer from '@/components/VueImageZoomer.vue'
import '@/assets/styles/vueImageZoomer.css';


export default {
  components: {
    VueImageZoomer
  },
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
    useFindSummaries()
    useFindCollapsible()
    useRevealMedia()
    await SQLiteService.notes(this.$route.name)
  },
}
</script>
<template>
  <div id="nav">
    <div class="nav full internal-link" @click="this.pageGoBack('cmn-multiply2-index')">
        <img src="@/assets/sites/mc2/images/ribbons/mc2back.png" class="nav full" />
    </div>
</div>
<div class="page_content ltr">
<h1>阶段四 倍增领袖</h1>
<div id="showVideoOptions"></div>
  <p>   
    <div class="zoom-image">
    <vue-image-zoomer
    regular="/images/zoom/sites/mc2/content/M2/cmn/multiply2/M2P4.png" 
    zoom="/images/zoom/sites/mc2/content/M2/cmn/multiply2/M2P4.png" :zoom-amount="3" img-class="img-fluid" alt="">
    <img src="@/assets/sites/mc2/content/M2/cmn/multiply2/M2P4.png" img-class="img-fluid" />
    </vue-image-zoomer>
    </div></p>

<ul>
	<li class="nobreak-final-final">这段时期为期大约15个月，是从耶稣设立十二使徒开始，使徒在一大群工人中成为&ldquo;受训中的领袖&rdquo;。当时还有更多的追随者和慕道友（<span class="popup-link" @click = "popUp('pop1')"> 路6:12-19</span>）。

	<div class="popup invisible" id="pop1"><!-- begin bible -->
	<p><sup class="versenum">12&nbsp;</sup>那时，耶稣出去上山祷告，整夜祷告神。<sup class="versenum">13&nbsp;</sup>到了天亮，叫他的门徒来，就从他们中间挑选十二个人，称他们为使徒。<sup class="versenum">14&nbsp;</sup>这十二个人有<u class="person underline">西门</u>，耶稣又给他起名叫<u class="person underline">彼得</u>，还有他兄弟<u class="person underline">安得烈</u>，又有<u class="person underline">雅各</u>和<u class="person underline">约翰</u>，<u class="person underline">腓力</u>和<u class="person underline">巴多罗买</u>，<sup class="versenum">15&nbsp;</sup><u class="person underline">马太</u>和<u class="person underline">多马</u>，<u class="person underline">亚勒腓</u>的儿子<u class="person underline">雅各</u>和奋锐党的<u class="person underline">西门</u>，<sup class="versenum">16&nbsp;</sup><u class="person underline">雅各</u>的儿子<u class="person underline">犹大</u>和卖主的加略人<u class="person underline">犹大</u>。<sup class="versenum">17&nbsp;</sup>耶稣和他们下了山，站在一块平地上。同站的有许多门徒，又有许多百姓，从犹太全地和耶路撒冷，并推罗、西顿的海边来，都要听他讲道，又指望医治他们的病。<sup class="versenum">18&nbsp;</sup>还有被污鬼缠磨的，也得了医治。<sup class="versenum">19&nbsp;</sup>众人都想要摸他，因为有能力从他身上发出来，医好了他们。</p>
	<!-- end bible --></div>
	十二使徒是耶稣精心挑选，委派、训练和投入心力的果子。使徒行传记载五旬节之后，神国度的拓展进一步证实这一点。</li>
	<li class="nobreak-final-final">之后，耶稣差派70人出去（<span class="popup-link" @click = "popUp('pop2')"> 路10:1</span>）。
	<div class="popup invisible" id="pop2"><!-- begin bible -->
	<p><sup class="versenum">1 </sup>这事以后，主又设立七十个人，差遣他们两个两个地在他前面，往自己所要到的各城各地方去。</p>
	<!-- end bible --></div>
	虽然在福音书记录里， 这些人并未被赋予同样正式的领导地位，但他们也是如使徒（意思是：被差遣的人）被差派。我们可以看到耶稣如何设计领袖的倍增，就是耶稣也嘱咐他们，为他们的事工兴起下一代的工人祷告（<span class="popup-link" @click = "popUp('pop3')"> 路10:2</span>）。

	<div class="popup invisible" id="pop3"><!-- begin bible -->
	<p><sup class="versenum">2&nbsp;</sup>就对他们说：&ldquo;要收的庄稼多，做工的人少。所以，你们当求庄稼的主，打发工人出去收他的庄稼。</p>
	<!-- end bible --></div>
	毫无疑问，这70位无名的宣教士有许多出现在初代教会中，在马可楼上的120人中，并包括耶稣在复活后向那500人显现的人中（<span class="popup-link" @click = "popUp('pop4')"> 林前15:6</span>）。

	<div class="popup invisible" id="pop4"><!-- begin bible -->
	<p><sup class="versenum">6&nbsp;</sup>后来一时显给五百多弟兄看，其中一大半到如今还在，却也有已经睡了的；</p>
	<!-- end bible --></div>
	</li>
</ul>

<p>&nbsp;</p>

<p>&nbsp;</p>


<!-- begin sdcard languageFooterDiscrete -->
<!-- end sdcard languageFooterDiscrete -->
</div><!--- Created by publishPage-->

</template>
<!-- begin sdcard Footer -->
<!-- end sdcard Footer -->