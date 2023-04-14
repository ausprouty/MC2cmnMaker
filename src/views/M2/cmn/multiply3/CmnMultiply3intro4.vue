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
<h1>阶段四：更远开荒宣教</h1>
<div id="showVideoOptions"></div>
  <p style="text-align:justify"><span><span><span><span><strong><span lang="ZH-CN"><span><span style="color:black">保罗第二次宣教之旅</span></span></span></strong></span></span></span></span></p>

<p style="text-align:justify"><span><span><span><span><strong><span lang="ZH-CN"><span><span style="color:black">公元</span></span></span></strong><strong><span lang="ZH-TW"><span><span style="color:black">49-51 </span></span></span></strong><strong><span lang="ZH-CN"><span><span style="color:black">年</span></span></span></strong></span></span></span></span></p>

<p><span lang="ZH-CN"><span><span style="color:black">此时期涵盖了安提阿的教会差遣第二支团队进行宣教之旅。重要的事迹有：罗马行省的一些主要城市向福音敞开；事奉不断扩展，愈多人成为门徒；更多天国工人的兴起。</span></span></span></p>

<p class="indent2">31. 再次出发重整团队&mdash;&mdash;因马可分两队（徒15:36-16:5） 129</p>

<p class="indent2">32. 圣灵带领进入欧洲&mdash;&mdash;福音西进（徒16:6-15） 132</p>

<p class="indent2">33. 难中神预备人&mdash;&mdash;腓立比（徒16:16-40） 135</p>

<ul>
	<li class="indent2">附录33.1《宣教士：古约翰》 139</li>
</ul>

<p class="indent2">34. 会堂辩道策略&mdash;&mdash;帖撒罗尼迦、庇哩亚（徒17:1-15） 142</p>

<p class="indent2">35. 公开卫道策略&mdash;&mdash;雅典（徒17:16-34） 145</p>

<p class="indent2">36. 会堂辩道策略&mdash;&mdash;哥林多（徒18:1-22） 149</p>

<p class="forward">
    <div class="zoom-image">
    <vue-image-zoomer
    regular="/images/zoom/sites/mc2/content/M2/cmn/multiply3/multiply3intro3.png"
    zoom="/images/zoom/sites/mc2/content/M2/cmn/multiply3/multiply3intro3.png" :zoom-amount="3" img-class="img-fluid" alt="">
    <img src="@/assets/sites/mc2/content/M2/cmn/multiply3/multiply3intro3.png" img-class="img-fluid" />
    </vue-image-zoomer>
    </div></p>

<p class="forward">保罗第二次传道旅程，把福音传到了欧洲，先是马其顿后是希腊，在哥林多写了帖撒罗尼迦前书后书，加拉太书也可能是在哥林多所写：</p>

<ol>
	<li class="forward">保罗和巴拿巴被差遣从耶路撒冷到安提阿（徒15:22-38）</li>
	<li class="forward">&nbsp;保罗和巴拿巴因马可起了争执，巴拿巴和马可去塞浦路斯（徒15:39）</li>
	<li class="forward">&nbsp;保罗走遍叙利亚和基利家坚固众教会（徒15:40-41）</li>
	<li class="forward">&nbsp;保罗到特庇、路司得和以哥念（徒16:1-5）</li>
	<li class="forward">&nbsp;圣灵禁止保罗在亚细亚传道，保罗就经弗吕家、加拉太、每西亚，在每西亚的边界想去庇推尼，圣灵却不许，他们就越过每西亚下到特罗亚，保罗夜间看见马其顿的异象（徒16:6-10）</li>
	<li class="forward">&nbsp;保罗到腓立比（徒16:11-40）</li>
	<li class="forward">保罗到帖撒罗尼迦、庇哩亚（徒17:1-14）</li>
	<li class="forward">保罗到雅典、哥林多，在哥林多住了一年半（徒17:15-18:18）</li>
	<li class="forward">保罗到以弗所（徒18:19-21）</li>
	<li class="forward">经凯撒利亚返耶路撒冷（徒18:22）</li>
</ol>

<p><span><span><span><span><span><span><span style="color:black">（</span></span></span><span lang="ZH-CN"><span><span style="color:black">以下</span></span></span><span><span><span style="color:black">图片与内容取自：</span></span></span>https://cmcbiblereading.com/wp-content/uploads/2016/10/118.gif</span></span></span><span class="MsoHyperlink" style="color:#0563c1"><u><span><span><span style="color:black">）</span></span></span></u></span></span></p>


<!-- begin sdcard languageFooterDiscrete -->
<!-- end sdcard languageFooterDiscrete -->
</div><!--- Created by publishPage-->

</template>
<!-- begin sdcard Footer -->
<!-- end sdcard Footer -->