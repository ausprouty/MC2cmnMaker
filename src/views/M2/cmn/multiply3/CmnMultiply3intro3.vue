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
<h1>阶段三：开始开荒宣教</h1>
<div id="showVideoOptions"></div>
  <h2>保罗第一次宣教之旅，公元46-48 年</h2>

<p><br />
此时期涵盖了圣灵从安提阿的教会差遣第一支团队进行宣教之旅。重要的事迹有：神迹奇事的发生、在各会堂教导人、教会的建立。此阶段可看到在不同情况下，使人作门徒的例子。</p>

<p class="indent2"><br />
24.&nbsp;&nbsp; &nbsp;教会差派宣教士&mdash;&mdash;教会差传的开始（徒 13:1-12）<br />
25.&nbsp;&nbsp; &nbsp;省会犹太人宣教&mdash;&mdash;异地同文化宣教（徒13:13-43）<br />
26.&nbsp;&nbsp; &nbsp;省会外邦人宣教&mdash;&mdash;异地跨文化宣教（徒13:44-52）<br />
27.&nbsp;&nbsp; &nbsp;城市传基督宣教&mdash;&mdash;城市的宣教策略（徒14:1-7）<br />
28.&nbsp;&nbsp; &nbsp;城镇行神迹宣教&mdash;&mdash;城镇的宣教策略（徒14:8-20）<br />
29.&nbsp;&nbsp; &nbsp;回程坚固初信徒&mdash;&mdash;坚固初信徒信心（徒14:21-28）<br />
30.&nbsp;&nbsp; &nbsp;论外邦信主条件&mdash;&mdash;开放跨文化信仰（徒15:1-3）</p>

<p class="indent2">
    <div class="zoom-image">
    <vue-image-zoomer
    regular="/images/zoom/sites/mc2/content/M2/cmn/images/custom/image2.png"
    zoom="/images/zoom/sites/mc2/content/M2/cmn/images/custom/image2.png" :zoom-amount="3" img-class="img-fluid" alt="">
    <img src="@/assets/sites/mc2/content/M2/cmn/images/custom/image2.png" img-class="img-fluid" />
    </vue-image-zoomer>
    </div></p>

<p class="indent2">
    <div class="zoom-image">
    <vue-image-zoomer
    regular="/images/zoom/sites/mc2/content/M2/cmn/images/custom/image3.png"
    zoom="/images/zoom/sites/mc2/content/M2/cmn/images/custom/image3.png" :zoom-amount="3" img-class="img-fluid" alt="">
    <img src="@/assets/sites/mc2/content/M2/cmn/images/custom/image3.png" img-class="img-fluid" />
    </vue-image-zoomer>
    </div></p>

<p style="text-align:justify"><span><span><span><span><span lang="ZH-CN"><span style="background-color:white"><span><span style="color:black">保罗第二次传道旅程，把福音传到了欧洲，先是马其顿后是希腊，在哥林多写了帖撒罗尼迦前书后书，加拉太书也可能是在哥林多所写：</span></span></span></span></span></span></span></span></p>

<ol>
	<li style="text-align:justify"><span><span><span><span><span lang="ZH-CN"><span style="background-color:white"><span><span style="color:black">保罗和巴拿巴被差遣从耶路撒冷到安提阿（徒</span></span></span></span><span lang="EN-US"><span style="background-color:white"><span><span style="color:black">15:22-38</span></span></span></span><span lang="ZH-CN"><span style="background-color:white"><span><span style="color:black">）</span></span></span></span></span></span></span></span></li>
	<li style="text-align:justify"><span><span><span><span><span lang="ZH-CN"><span style="background-color:white"><span><span style="color:black">保罗和巴拿巴因马可起了争执，巴拿巴和马可去塞浦路斯（徒</span></span></span></span><span lang="EN-US"><span style="background-color:white"><span><span style="color:black">15:39</span></span></span></span><span lang="ZH-CN"><span style="background-color:white"><span><span style="color:black">）</span></span></span></span></span></span></span></span></li>
	<li style="text-align:justify"><span><span><span><span><span lang="ZH-CN"><span style="background-color:white"><span><span style="color:black">保罗走遍叙利亚和基利家坚固众教会（徒</span></span></span></span><span lang="EN-US"><span style="background-color:white"><span><span style="color:black">15:40-41</span></span></span></span><span lang="ZH-CN"><span style="background-color:white"><span><span style="color:black">）</span></span></span></span></span></span></span></span></li>
	<li style="text-align:justify"><span><span><span><span><span lang="ZH-CN"><span style="background-color:white"><span><span style="color:black">保罗到特庇、路司得和以哥念（徒</span></span></span></span><span lang="EN-US"><span style="background-color:white"><span><span style="color:black">16:1-5</span></span></span></span><span lang="ZH-CN"><span style="background-color:white"><span><span style="color:black">）</span></span></span></span></span></span></span></span></li>
	<li style="text-align:justify"><span><span><span><span><span lang="ZH-CN"><span style="background-color:white"><span><span style="color:black">圣灵禁止保罗在亚细亚传道，保罗就经弗吕家、加拉太、每西亚，在每西亚的边界想去庇推尼，圣灵却不许，他们就越过每西亚下到特罗亚，保罗夜间看见马其顿的异象（徒</span></span></span></span><span lang="EN-US"><span style="background-color:white"><span><span style="color:black">16:6-10</span></span></span></span><span lang="ZH-CN"><span style="background-color:white"><span><span style="color:black">）</span></span></span></span></span></span></span></span></li>
	<li style="text-align:justify"><span><span><span><span><span lang="ZH-CN"><span style="background-color:white"><span><span style="color:black">保罗到腓立比（徒</span></span></span></span><span lang="EN-US"><span style="background-color:white"><span><span style="color:black">16:11-40</span></span></span></span><span lang="ZH-CN"><span style="background-color:white"><span><span style="color:black">）</span></span></span></span></span></span></span></span></li>
	<li style="text-align:justify"><span><span><span><span><span lang="ZH-CN"><span style="background-color:white"><span><span style="color:black">保罗到帖撒罗尼迦、庇哩亚（徒</span></span></span></span><span lang="EN-US"><span style="background-color:white"><span><span style="color:black">17:1-14</span></span></span></span><span lang="ZH-CN"><span style="background-color:white"><span><span style="color:black">）</span></span></span></span></span></span></span></span></li>
	<li style="text-align:justify"><span><span><span><span><span lang="ZH-CN"><span style="background-color:white"><span><span style="color:black">保罗到雅典、哥林多，在哥林多住了一年半（徒</span></span></span></span><span lang="EN-US"><span style="background-color:white"><span><span style="color:black">17:15-18:18</span></span></span></span><span lang="ZH-CN"><span style="background-color:white"><span><span style="color:black">）</span></span></span></span></span></span></span></span></li>
	<li style="text-align:justify"><span><span><span><span><span lang="ZH-CN"><span style="background-color:white"><span><span style="color:black">保罗到以弗所（徒</span></span></span></span><span lang="EN-US"><span style="background-color:white"><span><span style="color:black">18:19-21</span></span></span></span><span lang="ZH-CN"><span style="background-color:white"><span><span style="color:black">）</span></span></span></span></span></span></span></span></li>
	<li style="text-align:justify"><span><span><span><span><span lang="ZH-CN"><span style="background-color:white"><span><span style="color:black">经凯撒利亚返耶路撒冷（徒</span></span></span></span><span lang="EN-US"><span style="background-color:white"><span><span style="color:black">18:22</span></span></span></span><span lang="ZH-CN"><span style="background-color:white"><span><span style="color:black">）</span></span></span></span></span></span></span></span></li>
</ol>

<p><span><span><span><span><span><span><span style="color:black">（</span></span></span><span lang="ZH-CN"><span><span style="color:black">以下</span></span></span><span><span><span style="color:black">图片与内容取自：</span></span></span></span></span></span></span><span><span><span><span>https://cmcbiblereading.com/wp-content/uploads/2016/10/118.gif</span></span></span></span>&nbsp;</p>


<!-- begin sdcard languageFooterDiscrete -->
<!-- end sdcard languageFooterDiscrete -->
</div><!--- Created by publishPage-->

</template>
<!-- begin sdcard Footer -->
<!-- end sdcard Footer -->