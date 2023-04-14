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
  <div id="nav">
    <div class="nav full internal-link" @click="this.pageGoBack('cmn-tot2-index')">
        <img src="@/assets/sites/mc2/images/ribbons/mc2back.png" class="nav full" />
    </div>
</div>
<div class="page_content ltr">
<div class="block ltr">
                        <div class="chapter_number ltr"><h1>5.6.</h1></div>
                        <div class="chapter_title ltr"><h1>欧洲</h1></div>
                    </div>
<div id="showVideoOptions"></div>
  <h1>欧洲 主后60-62</h1>

<div class="s8_tot2_reference">
<p><strong>关键经文</strong></p>

<p>徒28:30-31：保罗在自己所租的房子里住了足足两年。凡来见他的人，他全都接待，放胆传讲　神国的道，将主耶稣基督的事教导人，并没有人禁止。</p>
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

<p>放胆、经常传福音和造就门徒</p>

<table>
	<tbody>
		<tr>
			<td style="border-color:gray; border-style:solid; border-width:1px; width:75%"><strong>其他关键事件：</strong>保罗第四次旅程带到亚细亚，马其顿，塞浦路斯，克里特岛，进到亚得里亚海，马耳他和罗马</td>
			<td style="border-color:gray; border-style:solid; border-width:1px; width:25%">&nbsp;</td>
		</tr>
	</tbody>
</table>


<!-- begin sdcard languageFooterDiscrete -->
<!-- end sdcard languageFooterDiscrete -->
</div><!--- Created by publishPage-->

</template>
<!-- begin sdcard Footer -->
<!-- end sdcard Footer -->