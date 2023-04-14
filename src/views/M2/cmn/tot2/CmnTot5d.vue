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
  <!-- begin note capacitor-->
<div class="note-area">
    <form class="auto_submit_item">
      <textarea
        class="textarea resize-ta"
        @keyup="this.addNote('note18Text')"
        id="note18Text"
      ></textarea>
    </form>
</div>
<!-- end note capacitor -->

<!-- end note capacitor -->

<!-- end note capacitor -->

<!-- end note capacitor -->

<!-- end note capacitor -->

<!-- end note capacitor -->

<!-- end note capacitor -->

<!-- end note capacitor -->

</div>
<div class="page_content ltr">
<div class="block ltr">
                        <div class="chapter_number ltr"><h1>5.4.</h1></div>
                        <div class="chapter_title ltr"><h1>保罗的第二次旅程</h1></div>
                    </div>
<div id="showVideoOptions"></div>
  <div class="content ltr">
<h1>保罗的第二次旅程 公元 46-52</h1>

<div class="s8_tot2_reference">
<p><strong>关键经文</strong></p>

<p>徒16:5于是众教会信心越发坚固，人数天天加增。</p>
</div>

<p><strong>门徒的实践</strong></p>

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


<p><strong>结果</strong></p>

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


<p><strong>记载/备注</strong></p>

<p>信心与数目增长</p>


<div class="s8_tot2_reference">
<p><strong>关键经文</strong></p>

<p>徒17:11这地方的人贤于帖撒罗尼迦的人，甘心领受这道，天天考查圣经...</p>
</div>

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

</div>

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

</div>

<p><strong>What was recorded or noticed?</strong></p>

<p>神的话语和教会的角色和影响力之更新</p>


<div class="s8_tot2_reference">
<p><strong>关键经文</strong></p>

<p>徒17:17于是在会堂里与犹太人和虔敬的人，并每日在市上所遇见的人辩论。</p>
</div>

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

</div>

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

&nbsp;

<p><strong>记载/备注</strong></p>

<p>有针对性的，公开并广泛撒种，固定，有说服力的传福音。</p>


<div class="s8_tot2_reference">
<p><strong>关键经文</strong></p>

<p>徒18:4每逢安息日，保罗在会堂里辩论，劝化犹太人和希腊人。</p>
</div>

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

</div>

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

</div>

<p><strong>记载/备注</strong></p>

<p>&nbsp;</p>


<div class="s8_tot2_reference">
<p><strong>关键经文</strong></p>

<p>徒18:11保罗在那里住了一年零六个月，将神的道教训他们。</p>
</div>

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

</div>

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

</div>

<p><strong>记载/备注</strong></p>

<p>专注投入在门徒造就</p>

<table>
	<tbody>
		<tr>
			<td style="border-color:gray; border-style:solid; border-width:1px; width:75%"><strong>其他关键事件：</strong>福音通过领导团队传开（保罗，西拉，提摩太，耶孙），看到医治，经历迫害，一个狱卒归主，专注在城市。然后他们回到安提阿并&ldquo;在那里呆了一段时间&rdquo;</td>
			<td style="border-color:gray; border-style:solid; border-width:1px; width:25%"><strong>教会/会众：</strong>徒15:3-4；徒15:22；徒15:41；徒16:5；徒18:22</td>
		</tr>
	</tbody>
</table>
</div>
</div>


<!-- begin sdcard languageFooterDiscrete -->
<!-- end sdcard languageFooterDiscrete -->
</div><!--- Created by publishPage-->

</template>
<!-- begin sdcard Footer -->
<!-- end sdcard Footer -->