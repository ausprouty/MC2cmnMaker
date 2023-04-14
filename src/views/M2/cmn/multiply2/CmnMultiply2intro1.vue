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
<h1>阶段一 预备</h1>
<div id="showVideoOptions"></div>
  <p>   
    <div class="zoom-image">
    <vue-image-zoomer
    regular="/images/zoom/sites/mc2/content/M2/cmn/images/custom/image13.png" 
    zoom="/images/zoom/sites/mc2/content/M2/cmn/images/custom/image13.png" :zoom-amount="3" img-class="img-fluid" alt="">
    <img src="@/assets/sites/mc2/content/M2/cmn/images/custom/image13.png" img-class="img-fluid" />
    </vue-image-zoomer>
    </div></p>

<p>这段时期从耶稣在公元前4年左右出生到大约30岁，其特点如下：</p>

<ul>
	<li>成为祂要倍增别人的榜样</li>
	<li>为敬虔生命和倍增运动做准备</li>
	<li class="nobreak-final-final">耶稣在人生的首30年里，&ldquo;渐渐长大成&rdquo;（<span class="popup-link" @click = "popUp('pop1')"> 路加福音2:40</span>,&nbsp;
	<div class="popup invisible" id="pop1"><!-- begin bible -->
	<p><sup class="versenum">40&nbsp;</sup>孩子渐渐长大，强健起来，充满智慧，又有神的恩在他身上。</p>
	<!-- end bible --></div>
	<span class="popup-link" @click = "popUp('pop2')"> 路加福音2:51-52</span>）

	<div class="popup invisible" id="pop2"><!-- begin bible -->
	<p><sup class="versenum">51&nbsp;</sup>他就同他们下去，回到拿撒勒，并且顺从他们。他母亲把这一切的事都存在心里。</p>

	<p><sup class="versenum">52&nbsp;</sup>耶稣的智慧和身量，并神和人喜爱他的心，都一齐增长。</p>
	<!-- end bible --></div>
	祂将在其他人中所倍增的人。这一切都发生在祂开始公开事工之前。从祂开始传道，很显然地，耶稣一直祈祷、计划并澄清祂的事工将会是什么，以及祂将如何去做。</li>
</ul>

<p>祂心中的热忱很单纯。祂的目标很清晰。祂决定的事工过程也很简单。祂与失丧者连接，得着他们，建立他们成为门徒，训练他们成为得人的渔夫，并差派他们以同样的过程去倍增其他人。</p>

<p>耶稣定意去寻找祂父所预备的人并借着他们作成祂的工。</p>

<p>&nbsp;</p>

<p>   
    <div class="zoom-image">
    <vue-image-zoomer
    regular="/images/zoom/sites/mc2/content/M2/cmn/multiply2/M2map.png" 
    zoom="/images/zoom/sites/mc2/content/M2/cmn/multiply2/M2map.png" :zoom-amount="3" img-class="img-fluid" alt="Map1">
    <img src="@/assets/sites/mc2/content/M2/cmn/multiply2/M2map.png" img-class="img-fluid" />
    </vue-image-zoomer>
    </div></p>

<p>&nbsp;</p>

<p>&nbsp;</p>


<!-- begin sdcard languageFooterDiscrete -->
<!-- end sdcard languageFooterDiscrete -->
</div><!--- Created by publishPage-->

</template>
<!-- begin sdcard Footer -->
<!-- end sdcard Footer -->