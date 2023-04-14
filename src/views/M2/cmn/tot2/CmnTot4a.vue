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
                        <div class="chapter_number ltr"><h1>4.</h1></div>
                        <div class="chapter_title ltr"><h1>耶稣的领袖发展过程</h1></div>
                    </div>
<div id="showVideoOptions"></div>
  <table id="breakout_room">
	<tbody>
		<tr>
			<th style="text-align: left;">经文</th>
			<th style="text-align: left;">带来改变</th>
		</tr>
		<tr>
			<td>
			<p>约1:35-51,<br />
			约 4:1-4</p>
			</td>
			<td>耶稣离开天堂，耶稣开始公开事工</td>
		</tr>
		<tr>
			<td>
			<p>约1:35-51,<br />
			约 4:1-4</p>
			</td>
			<td>耶稣从施洗约翰得到第一批门徒，祂的门徒比约翰多。</td>
		</tr>
		<tr>
			<td>
			<p>可1:16-20,<br />
			&nbsp;可1:35-39;<br />
			&nbsp;太4:23-25</p>
			</td>
			<td>呼召四位全时间的跟随者，带他们到加利利宣教；大批人跟随</td>
		</tr>
		<tr>
			<td>路 6:12-16,路 8:1-3</td>
			<td>
			<p>拣选12个门徒和他一起并差派他们出去，带他们参与事工旅程；一群妇女组成的后勤团队加入他们（作行政团队）</p>
			</td>
		</tr>
		<tr>
			<td>路9:1-5, 路9:28-36, 路10:1-6</td>
			<td>12使徒被差出去；他拣选三个人成为他的核心领导团队成员；另外差派72个门徒</td>
		</tr>
		<tr>
			<td>徒1:8-15, 1林前 15:5-7</td>
			<td>耶稣从死里复活，升天并差圣灵到世上</td>
		</tr>
	</tbody>
</table>


<!-- begin sdcard languageFooterDiscrete -->
<!-- end sdcard languageFooterDiscrete -->
</div><!--- Created by publishPage-->

</template>
<!-- begin sdcard Footer -->
<!-- end sdcard Footer -->