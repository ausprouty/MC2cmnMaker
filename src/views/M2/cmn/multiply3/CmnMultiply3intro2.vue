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
<h1>阶段二：建立宣教胸怀</h1>
<div id="showVideoOptions"></div>
  <h2>跨越文化籓篱（公元 32-45 年）</h2>

<p><br />
此时期涵盖了教会十二年的成长与事奉。重要的事迹是：耶稣带领信徒到耶路撒冷以外的地方去使人作门徒，跨越了文化籓篱。去使人作门徒与建立教会的事奉，从耶路撒冷传到犹太全地、和撒玛利亚，直到外邦人的世界。</p>

<p class="indent2"><br />
14.&nbsp;&nbsp; &nbsp;腓利在撒玛利亚传道&mdash;&mdash;近文化宣教（徒8:4-25）<br />
15.&nbsp;&nbsp; &nbsp;腓利向非洲太监传道&mdash;&mdash;跨文化宣教（徒8:26-40）<br />
16.&nbsp;&nbsp; &nbsp;保罗遇见耶稣归向主&mdash;&mdash;神呼召工人（徒9:1-19）&nbsp;&nbsp; &nbsp;<br />
17.&nbsp;&nbsp; &nbsp;保罗放胆传讲主的道&mdash;&mdash;初信的火热（徒9:20-31）&nbsp;&nbsp; &nbsp;<br />
18.&nbsp;&nbsp; &nbsp;彼得在耶城外传道&mdash;&mdash;跨地域宣教（徒9:32-43）&nbsp;&nbsp; &nbsp;<br />
19.&nbsp;&nbsp; &nbsp;彼得被差进外邦人&mdash;&mdash;被预备宣教（徒10:1-33）&nbsp;&nbsp; &nbsp;<br />
20.&nbsp;&nbsp; &nbsp;彼得向外邦人宣教&mdash;&mdash;跨文化宣教（徒10:34-48） &nbsp;&nbsp; &nbsp;<br />
21.&nbsp;&nbsp; &nbsp;彼得分享宣教见证&mdash;&mdash;众赞同宣教（徒11:1-18）&nbsp;&nbsp; &nbsp;<br />
22.&nbsp;&nbsp; &nbsp;安提阿教会的成立&mdash;&mdash;差传的基础（徒11:19-30）&nbsp;&nbsp; &nbsp;<br />
23.&nbsp;&nbsp; &nbsp;恶有恶报神道兴旺&mdash;&mdash;马可的出场（徒12:1-25）</p>

<p style="text-align:justify">&nbsp;</p>

<table style="width:100%">
	<tbody>
		<tr>
			<td>
			<div>
			<p style="text-align:justify"><span><span><strong><span lang="ZH-CN"><span>腓利和彼得的传道行踪：</span></span></strong></span></span></p>

			<ol>
				<li style="text-align:justify"><span><span><span lang="ZH-CN">腓利下撒马利亚去宣讲基督，福音临到了撒马利亚人（徒</span><span lang="EN-US">8:5-13</span><span lang="ZH-CN">）</span></span></span></li>
				<li style="text-align:justify"><span><span><span lang="ZH-CN">彼得和约翰再去撒马利亚（徒</span><span lang="EN-US">8:14-24</span><span lang="ZH-CN">）</span></span></span></li>
				<li style="text-align:justify"><span><span><span lang="ZH-CN">使徒回耶路撒冷，一路在撒马利亚各处传扬福音（徒</span><span lang="EN-US">8:25</span><span lang="ZH-CN">）；</span></span></span></li>
				<li style="text-align:justify"><span><span><span lang="ZH-CN">腓利在下迦萨的路上传道给埃塞俄比亚的太监，福音临到了含的后裔（徒</span><span lang="EN-US">8:26-38</span><span lang="ZH-CN">）；</span></span></span></li>
				<li style="text-align:justify"><span><span><span lang="ZH-CN">腓利在亚锁都和凯撒利亚传福音（徒</span><span lang="EN-US">8:39-40</span><span lang="ZH-CN">）；</span></span></span></li>
				<li style="text-align:justify"><span><span><span lang="ZH-CN">彼得周流四方，到了吕大，许多人信主（徒</span><span lang="EN-US">9:32-35</span><span lang="ZH-CN">）；</span></span></span></li>
				<li style="text-align:justify"><span><span><span lang="ZH-CN">彼得到约帕，医治多加（徒</span><span lang="EN-US">9:36-43</span><span lang="ZH-CN">）</span></span></span></li>
				<li style="text-align:justify"><span><span><span lang="ZH-CN">彼得见异象后去凯撒利亚的哥尼流家传道，福音临到了雅弗的后裔（徒</span><span lang="EN-US">10:1-48</span><span lang="ZH-CN">）。</span></span></span></li>
			</ol>
			</div>
			</td>
		</tr>
	</tbody>
</table>

<p>   
    <div class="zoom-image">
    <vue-image-zoomer
    regular="/images/zoom/sites/mc2/content/M2/cmn/images/custom/image-20210215115024-1.png" 
    zoom="/images/zoom/sites/mc2/content/M2/cmn/images/custom/image-20210215115024-1.png" :zoom-amount="3" img-class="img-fluid" alt="">
    <img src="@/assets/sites/mc2/content/M2/cmn/images/custom/image-20210215115024-1.png" img-class="img-fluid" />
    </vue-image-zoomer>
    </div></p>

<p style="text-align:justify">&nbsp;</p>

<p style="text-align:justify">&nbsp;</p>

<table style="width:100%">
	<tbody>
		<tr>
			<td>
			<div>
			<p><span><span><span lang="ZH-CN"><span>上图与内容说明载自：</span></span><span lang="EN-US">https://cmcbiblereading.com/wp-content/uploads/2016/10/114.gif</span></span></span></p>
			</div>
			</td>
		</tr>
	</tbody>
</table>

<p>&nbsp;</p>


<!-- begin sdcard languageFooterDiscrete -->
<!-- end sdcard languageFooterDiscrete -->
</div><!--- Created by publishPage-->

</template>
<!-- begin sdcard Footer -->
<!-- end sdcard Footer -->