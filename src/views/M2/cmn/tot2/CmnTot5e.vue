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
        @keyup="this.addNote('note6Text')"
        id="note6Text"
      ></textarea>
    </form>
</div>
<!-- end note capacitor -->

<!-- end note capacitor -->

</div>
<div class="page_content ltr">
<div class="block ltr">
                        <div class="chapter_number ltr"><h1>5.5.</h1></div>
                        <div class="chapter_title ltr"><h1>保罗的第三次旅程</h1></div>
                    </div>
<div id="showVideoOptions"></div>
  <h1>保罗的第三次旅程 主后54-58</h1>

<div class="s8_tot2_reference">
<p><strong>关键经文</strong></p>

<p>徒19:8-11：[在以弗所]保罗进会堂放胆讲道，一连三个月，辩论　神国的事，劝化众人。后来，有些人心里刚硬不信，在众人面前毁谤这道。保罗就离开他们，也叫门徒与他们分离，便在推喇奴的学房天天辩论。这样有两年之久，叫一切住在亚西亚的，无论是犹太人，是希腊人，都听见主的道。神藉保罗的手行了些非常的奇事。</p>
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


<p>&nbsp;</p>

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


<p>&nbsp;</p>

<p><strong>记载/备注</strong></p>

<p>门徒造就</p>

<p>传福音的影响力与拓展</p>


<div class="s8_tot2_reference">
<p><strong>关键经文</strong></p>

<p>徒19:17-18,20：凡住在以弗所的，无论是犹太人，是希腊人，都知道这事，也都惧怕，主耶稣的名从此就尊大了。那已经信的，多有人来承认诉说自己所行的事。...主的道大大兴旺，而且得胜，就是这样。</p>
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


<p>&nbsp;</p>
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

<p><strong>记载/备注</strong></p>

<p>身心健全<br />
转变故事</p>


<table>
	<tbody>
		<tr>
			<td style="border-color:gray; border-style:solid; border-width:1px; width:75%"><strong>其他关键事件：</strong>他回到许多刚健的教会去&ldquo;坚固他们&rdquo;。最后，他们住在以弗所2年。当他们从&quot;这地到那地&quot;，主的手都与他们同在（徒19:13-19）。当主耶稣的名被尊大，人们离开他们以前的生活，并拒绝&quot;自己所行的事&quot;。</td>
			<td style="border-color:gray; border-style:solid; border-width:1px; width:25%"><strong>教会/会众：</strong>徒19:32;徒19:39;徒19:41;徒20:17;徒20:28</td>
		</tr>
	</tbody>
</table>


<!-- begin sdcard languageFooterDiscrete -->
<!-- end sdcard languageFooterDiscrete -->
</div><!--- Created by publishPage-->

</template>
<!-- begin sdcard Footer -->
<!-- end sdcard Footer -->