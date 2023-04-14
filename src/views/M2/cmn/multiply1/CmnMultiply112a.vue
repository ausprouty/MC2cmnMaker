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
    <div class="nav full internal-link" @click="this.pageGoBack('cmn-multiply1-index')">
        <img src="@/assets/sites/mc2/images/ribbons/mc2back.png" class="nav full" />
    </div>
</div>
<div class="page_content ltr">
<div class="block ltr">
                        <div class="chapter_number ltr"><h1>12.1.</h1></div>
                        <div class="chapter_title ltr"><h1>举办一场福音性聚会</h1></div>
                    </div>
<div id="showVideoOptions"></div>
  <p class="forward">这份文件提供了一场&ldquo;福音性聚会&rdquo;的概览。</p>

<h2 class="forward">目标</h2>

<p class="indent">&ldquo;福音性聚会&rdquo;的目标是在新的关系网中，为新增五人以上的新信徒小组提升动力。在&ldquo;倍增教会与小组&rdquo;（MC2）中所学到的&ldquo;祷告、关怀与分享&rdquo;和辨认&ldquo;和平之子&rdquo;的行动，是举办&ldquo;福音性聚会&rdquo;的关键步骤。</p>

<h2 class="forward">过程</h2>

<p class="indent">一场&ldquo;福音性聚会&rdquo;的时间大约是1到1.5个小时，这是设计在家中举办的。参与者是从主办人的人际网络中邀请而来的，人数为10至15人。建议主办人就是你通过&ldquo;祷告、关怀与分享&rdquo;所接触到的&ldquo;和平之子&rdquo;。（若这&ldquo;和平之子&rdquo;无法举办聚会，你可以在自己的家中举办。）</p>

<p class="indent3">《筹备清单及聚会主持模板》会提供更详细的福音聚会流程说明。</p>

<h2 class="forward">建议角色</h2>

<ul class="forward">
	<li class="forward">聚会主持人与引导讨论的人</li>
	<li class="forward">分享个人见证（生命故事）的人</li>
	<li class="forward">分享福音并总结的人（呼召的人）</li>
</ul>

<h2 class="forward">回应表模板（按实际节目内容列出评估项目）</h2>

<p>&nbsp;</p>

<p>   
    <div class="zoom-image">
    <vue-image-zoomer
    regular="/images/zoom/sites/mc2/content/M2/cmn/multiply1/M1L12a.png" 
    zoom="/images/zoom/sites/mc2/content/M2/cmn/multiply1/M1L12a.png" :zoom-amount="3" img-class="img-fluid" alt="">
    <img src="@/assets/sites/mc2/content/M2/cmn/multiply1/M1L12a.png" img-class="img-fluid" />
    </vue-image-zoomer>
    </div></p>

<h2 class="forward">可用来分享福音的视频：</h2>

<ul class="forward">
	<li class="forward">《破碎的盘子》</li>
	<li class="forward">《四件事沙画》</li>
	<li class="forward">《耶稣传》片段</li>
	<li class="forward">《有罪的女人》（路7:36-50）</li>
	<li class="forward">《我的最后一天》</li>
</ul>

<h2 class="forward">额外的影片资源：</h2>

<ul class="forward">
	<li class="forward">全球视频网－www.globalshortfilmnetwork.com</li>
	<li class="forward">&ldquo;耶稣传&rdquo;视频&mdash;https://www.jesusfilm.org/watch.html</li>
	<li class="forward">Jesus Film（耶稣传）app</li>
</ul>


<!-- begin sdcard languageFooterDiscrete -->
<!-- end sdcard languageFooterDiscrete -->
</div><!--- Created by publishPage-->

</template>
<!-- begin sdcard Footer -->
<!-- end sdcard Footer -->