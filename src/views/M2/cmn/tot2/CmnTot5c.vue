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
        @keyup="this.addNote('note10Text')"
        id="note10Text"
      ></textarea>
    </form>
</div>
<!-- end note capacitor -->

<!-- end note capacitor -->

<!-- end note capacitor -->

<!-- end note capacitor -->

</div>
<div class="page_content ltr">
<div class="block ltr">
                        <div class="chapter_number ltr"><h1>5.3.</h1></div>
                        <div class="chapter_title ltr"><h1>保罗的第一次旅程</h1></div>
                    </div>
<div id="showVideoOptions"></div>
  <div class="content ltr">
<h1><strong id="docs-internal-guid-17efc325-7fff-bdc1-3db2-15af26e513e8"><span style="background-color:transparent; color:#000000">亚细亚</span><br />
<span style="background-color:transparent; color:#000000">公元46-52</span><br />
<span style="background-color:transparent; color:#000000">保罗的第一次旅程</span></strong></h1>

<div class="s8_tot2_reference">
<p><strong>关键经文</strong></p>

<p>徒13:49,52于是主的道传遍了那一带地方。门徒满心喜乐，又被圣灵充满。</p>
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

&nbsp;

<p><strong>记载/备注</strong></p>

<p>蒙召故事<br />
地域扩展<br />
门徒增长（圣灵充满）</p>


<div class="s8_tot2_reference">
<p><strong>关键经文</strong></p>

<p>徒14:7,22,23...在那里传福音。...坚固门徒的心，劝他们恒守所信的道，又说：&ldquo;我们进入　神的国，必须经历许多艰难。&rdquo;二人在各教会中选立了长老，又禁食祷告，就把他们交托所信的主。</p>
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

<p><strong>记载/备注</strong></p>

<p>传福音、造就门徒、委任领袖并社群的成立<br />
新教会建立</p>


<div class="s8_tot2_reference">
<p><strong>关键经文</strong></p>

<p>徒14:26-28到了安提阿，他们就在那里同门徒住了多日。</p>
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


<p><strong>记载/备注</strong></p>

<p>&nbsp;</p>

<table>
	<tbody>
		<tr>
			<td style="border-color:gray; border-style:solid; border-width:1px">其他主要事件：耶路撒冷公会（徒15）</td>
			<td style="border-color:gray; border-style:solid; border-width:1px"><strong id="docs-internal-guid-10b46372-7fff-790a-2a5c-ea209afc4c6e"><strong>教会/会众：</strong><span style="background-color:transparent; color:#000000">徒4:23；徒14:27</span></strong></td>
		</tr>
	</tbody>
</table>
<br />
<br />
&nbsp;
&nbsp;
</div>
</div>

<p>&nbsp;</p>


<!-- begin sdcard languageFooterDiscrete -->
<!-- end sdcard languageFooterDiscrete -->
</div><!--- Created by publishPage-->

</template>
<!-- begin sdcard Footer -->
<!-- end sdcard Footer -->