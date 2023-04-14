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
    <div class="nav full internal-link" @click="this.pageGoBack('cmn-multiply3-index')">
        <img src="@/assets/sites/mc2/images/ribbons/mc2back.png" class="nav full" />
    </div>
</div>
<div class="page_content ltr">
<h1>阶段一：建立本土教会</h1>
<div id="showVideoOptions"></div>
  <h2>爆发耶路撒冷〔公元 30-32 年〕<br />
&nbsp;</h2>

<p>此时期涵盖了耶稣死后复活升天的头两年。主所设立的使徒开始遵照大使命去使人作门徒，但并未到耶路撒冷以外的地方去。此阶段重要的事迹有：信徒人数爆增、门徒受逼迫、许多神迹奇事发生，以及信徒群体（教会）基本特征的建立。</p>

<p class="indent2">1.&nbsp;&nbsp; &nbsp;耶稣被接升上天&mdash;&mdash;颁大使命（徒1:1-11）<br />
2.&nbsp;&nbsp; &nbsp;门徒寻求神替补&mdash;&mdash;编制工人 (徒1:12-26)<br />
3.&nbsp;&nbsp; &nbsp;圣灵降临显大能&mdash;&mdash;预备工人（徒2:1-13）<br />
4.&nbsp;&nbsp; &nbsp;彼得向群众讲道&mdash;&mdash;开始布道（徒2:14-41）<br />
5.&nbsp;&nbsp; &nbsp;信徒成使命群体&mdash;&mdash;建立聚会（徒2:42-47）<br />
6.&nbsp;&nbsp; &nbsp;神迹见证福音真&mdash;&mdash;见证福音（徒 3:1-26）<br />
7.&nbsp;&nbsp; &nbsp;逼迫中大放胆量&mdash;&mdash;勇对挑战（徒4:1-31）<br />
8.&nbsp;&nbsp; &nbsp;圣灵清理假信徒&mdash;&mdash;真实敬虔（徒4:32-5:11）<br />
9.&nbsp;&nbsp; &nbsp;逼迫中蒙神拯救&mdash;&mdash;信靠顺服（徒5:12-42）<br />
10.&nbsp;&nbsp; &nbsp;领袖兴起需不断&mdash;&mdash;领袖发展（徒6:1-7）<br />
11.&nbsp;&nbsp; &nbsp;司提反被捕&mdash;&mdash;扩展召逼迫（徒6:8-15）<br />
12.&nbsp;&nbsp; &nbsp;司提反辩护&mdash;&mdash;逼迫中卫道（徒7:1-53）<br />
13.&nbsp;&nbsp; &nbsp;司提反殉道&mdash;&mdash;逼迫促扩展（徒7:54-8:3）</p>

<p class="indent2">   
    <div class="zoom-image">
    <vue-image-zoomer
    regular="/images/zoom/sites/mc2/content/M2/cmn/images/custom/image1.png" 
    zoom="/images/zoom/sites/mc2/content/M2/cmn/images/custom/image1.png" :zoom-amount="3" img-class="img-fluid" alt="">
    <img src="@/assets/sites/mc2/content/M2/cmn/images/custom/image1.png" img-class="img-fluid" />
    </vue-image-zoomer>
    </div></p>


<!-- begin sdcard languageFooterDiscrete -->
<!-- end sdcard languageFooterDiscrete -->
</div><!--- Created by publishPage-->

</template>
<!-- begin sdcard Footer -->
<!-- end sdcard Footer -->