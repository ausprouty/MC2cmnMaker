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
        @keyup="this.addNote('note16Text')"
        id="note16Text"
      ></textarea>
    </form>
</div>
<!-- end note capacitor -->

<!-- end note capacitor -->

<!-- end note capacitor -->

<!-- end note capacitor -->

<!-- end note capacitor -->

</div>
<div class="page_content ltr">
<div class="block ltr">
                        <div class="chapter_number ltr"><h1>5.2.</h1></div>
                        <div class="chapter_title ltr"><h1>巴勒斯坦–犹大，撒马利亚</h1></div>
                    </div>
<div id="showVideoOptions"></div>
  <div class="content ltr">
<h1>巴勒斯坦&ndash;犹大，撒马利亚<br />
公元32-45</h1>

<h2>腓利, 彼得, 巴拿巴, 保罗</h2>

<div class="s8_tot2_reference">
<p><strong>关键经文</strong></p>

<p>徒8:4-8.12那些分散的人往各处去传道。腓利下撒马利亚城去宣讲基督&hellip;有许多人被污鬼附著，那些鬼大声呼叫，从他们身上出来；还有许多瘫痪的、瘸腿的，都得了医治。在那城里就大有欢喜&hellip;及至他们信了腓利所传　神国的福音和耶稣基督的名，连男带女就受了洗。</p>
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

<p>记录地域扩张─城市与地区提及</p>

<p>福音影响力与福音转化</p>

<p>医治的故事</p>


<div class="s8_tot2_reference">
<p><strong>关键经文</strong></p>

<p>徒8:35腓利就开口从这经上起，对他传讲耶稣。</p>
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

<p><strong>结果</strong></p>

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


<p><strong>记载/备注</strong></p>

<p>个人传福音故事<br />
新信徒的地位与影响范围</p>


<div class="s8_tot2_reference">
<p><strong>关键经文</strong></p>

<p>徒9:31那时，犹太、加利利、撒马利亚各处的教会都得平安，被建立；凡事敬畏主，蒙圣灵的安慰，人数就增多了。</p>
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


<p><strong>记载/备注</strong></p>

<p>扩展新的地域：埃塞俄比亚、凯撒利亚、安提阿/希腊人。倍增</p>


<div class="s8_tot2_reference">
<p><strong>关键经文</strong></p>

<p>徒11:20-21传讲主耶稣。主与他们同在，信而归主的人就很多了。</p>
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


<p>&nbsp;</p>

<p><strong>结果</strong></p>

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


<p>&nbsp;</p>
</div>
<strong>记载/备注</strong>

<p>向下扎根（建立）和向上成长（倍增）。</p>


<div class="s8_tot2_reference">
<p><strong>关键经文</strong></p>

<p>徒12:24神的道日见兴旺，越发广传。</p>
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


<p>&nbsp;</p>

<p><strong>结果</strong></p>

<!-- begin note capacitor-->
<div class="note-area">
    <form class="auto_submit_item">
      <textarea
        class="textarea resize-ta"
        @keyup="this.addNote('note11Text')"
        id="note11Text"
      ></textarea>
    </form>
</div>
<!-- end note capacitor -->

</div>

<p><strong>记载/备注</strong></p>

<p>&nbsp;</p>

<table>
	<tbody>
		<tr>
			<td style="border-color:gray; border-style:solid; border-width:1px; width:75%">其他关键事件：扫罗的悔改与彼得宣教旅程（徒9章）。在凯撒利亚的哥尼流归向基督（徒10章）。安提阿的希腊人归主（徒11:19-21）。耶路撒冷的饥荒开始（徒11：27）。雅各被杀了，彼得被捕（徒12章）</td>
			<td style="border-color:gray; border-style:solid; border-width:1px; width:25%"><strong>教会/会众：徒9:31；徒11:22；徒11:26；徒12:1；徒12:5；徒13:1</strong></td>
		</tr>
	</tbody>
</table>
<br />
<br />
&nbsp;
&nbsp;
</div>
</div>


<!-- begin sdcard languageFooterDiscrete -->
<!-- end sdcard languageFooterDiscrete -->
</div><!--- Created by publishPage-->

</template>
<!-- begin sdcard Footer -->
<!-- end sdcard Footer -->