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
                        <div class="chapter_number ltr"><h1>5.7.</h1></div>
                        <div class="chapter_title ltr"><h1>All</h1></div>
                    </div>
<div id="showVideoOptions"></div>
  
<h1><strong>Jerusalem AD 30-32 The 12, Peter, James, Stephen</strong></h1>

<table id="breakout_room">
	<tbody>
		<tr>
			<th>Key References</th>
			<th>The Disciples&rsquo; Practices</th>
			<th>The Results</th>
			<th>Recorded / Noticed</th>
		</tr>
		<tr>
			<td>Acts 2:42. 46-47: And they devoted themselves to the apostles&rsquo; teaching and the fellowship, to the breaking of bread and to prayer... And the Lord added to their number day by day those who were being saved.</td>
			<td>&nbsp;</td>
			<td>&nbsp;</td>
			<td>Added numbers; growing harvest of new believers &ndash; <strong>evangelism impact</strong></td>
		</tr>
		<tr>
			<td>Acts 4:4 &ldquo;those who heard the word believed&hellip; about 5,000.&rdquo;</td>
			<td>&nbsp;</td>
			<td>&nbsp;</td>
			<td><strong>The # of Conversions</strong></td>
		</tr>
		<tr>
			<td>Acts 5:42: And every day, in the temple and from house to house, they did not cease teaching and preaching that the Christ is Jesus.</td>
			<td>&nbsp;</td>
			<td>&nbsp;</td>
			<td><strong>Training, teaching</strong> and preaching happened on a regular basis</td>
		</tr>
		<tr>
			<td>Acts 6:1-2: Now in these days when the disciples were increasing in number, a complaint by the Hellenists arose against the Hebrews because their widows were being neglected in the daily distribution. And the twelve summoned the full number of the disciples and said . . .</td>
			<td>&nbsp;</td>
			<td>&nbsp;</td>
			<td><strong>Well-being issues </strong>were taken seriously</td>
		</tr>
		<tr>
			<td>Acts 6:7: But we will devote ourselves to prayer and to the ministry of the word&hellip; And the word of God continued to increase, and the number of the disciples multiplied greatly in Jerusalem, and a great many of the priests became obedient to the faith.</td>
			<td>&nbsp;</td>
			<td>&nbsp;</td>
			<td><strong>Multiplication</strong>, evangelism impact and growth.</td>
		</tr>
		<tr>
			<td colspan="3"><strong>Other Key Events</strong>: Peter &amp; John before Council (Acts 4), imprisoned, flogged, freed (Acts 5). Stephens defense and death (Acts 7)</td>
			<td><strong>Church/Ekklesia:</strong> Acts 5:11; Acts 7:38; Acts 8:1; Acts 8:3</td>
		</tr>
	</tbody>
</table>

<h1><strong>Palestine &ndash; Judea, Samaria AD 32-45 Philip, Peter, Barnabas, Paul</strong></h1>

<table id="breakout_room">
	<tbody>
		<tr>
			<th>Key References</th>
			<th>The Disciples&rsquo; Practices</th>
			<th>The Results</th>
			<th>Recorded / Noticed</th>
		</tr>
		<tr>
			<td>Acts 8:4-8. 12: Now those who were scattered went about preaching the word.<sup>&nbsp;</sup>Philip went down to the city of Samaria and proclaimed to them the Christ&hellip; unclean spirits, crying out with a loud voice, came out of many who had them, and many who were paralyzed or lame were healed. So, there was much joy in that city&hellip; they believed Philip as he preached good news about the kingdom of God and the name of Jesus Christ, they were baptized, both men and women.</td>
			<td>&nbsp;</td>
			<td>&nbsp;</td>
			<td><strong>Geographical expansion</strong> was recorded &ndash; cities and regions are named
			<p>Evangelism impact and <strong>gospel transformation</strong></p>

			<p><strong>Stories of healing</strong></p>
			</td>
		</tr>
		<tr>
			<td>Acts 8:35: Then Philip opened his mouth and beginning with this Scripture he told him the good news about Jesus.</td>
			<td>&nbsp;</td>
			<td>&nbsp;</td>
			<td>Personal <strong>evangelism story</strong>
			<p><strong>The position and sphere of influence of the new believer</strong></p>
			</td>
		</tr>
		<tr>
			<td>Acts 9:31: So, the church throughout all Judea and Galilee and Samaria had peace and was being built up. And walking in the fear of the Lord and in the comfort of the Holy Spirit, it multiplied.</td>
			<td>&nbsp;</td>
			<td>&nbsp;</td>
			<td><strong>The new geographical expansion: Ethiopia. Caesarea. Antioch/Greeks. (Multiplication)</strong></td>
		</tr>
		<tr>
			<td>Acts 11:20-21: preaching the Lord Jesus. And the hand of the Lord was with them, and a great number who believed turned to the Lord... great many people were added to the Lord.</td>
			<td>&nbsp;</td>
			<td>&nbsp;</td>
			<td><strong>Growth in depth (built up) and growth in scope (multiplied)</strong>
			<p><strong>Conversions</strong></p>
			</td>
		</tr>
		<tr>
			<td>Acts 12:24: But the word of God increased and multiplied</td>
			<td>&nbsp;</td>
			<td>&nbsp;</td>
			<td>&nbsp;</td>
		</tr>
		<tr>
			<td colspan="3"><strong>Other Key Events</strong>: Conversion of Saul &amp; Peter&rsquo;s travelling ministry (Acts 9). Cornelius comes to Christ in Caesarea (Acts 10). Greeks in Antioch come to Christ (Acts 11:19-21). Famine in Jerusalem began (Acts 11:27ff). James was killed. Peter arrested (Acts 12).</td>
			<td><strong>Church/Ekklesia: </strong>Acts 9:31; Acts 11:22; Acts 11:26; Acts 12:1; Acts 12:5; Acts 13:1</td>
		</tr>
	</tbody>
</table>

<h1><strong>1st Missionary Journey AD 46-48 Cities of Galatia</strong></h1>

<table id="breakout_room">
	<tbody>
		<tr>
			<th>Key References</th>
			<th>The Disciples&rsquo; Practices</th>
			<th>The Results</th>
			<th>Recorded / Noticed</th>
		</tr>
		<tr>
			<td>Acts 13:49, 52: And the word of the Lord was spreading throughout the whole region. And the disciples were filled with joy and with the Holy Spirit.</td>
			<td>&nbsp;</td>
			<td>&nbsp;</td>
			<td><strong>Calling story</strong>
			<p><strong>Geographical expansion</strong></p>

			<p><strong>Discipleship growth (filled</strong></p>

			<p><strong>w/H.S.)</strong></p>
			</td>
		</tr>
		<tr>
			<td>Acts 14:7, 22, 23 : ...they continued to preach the gospel&hellip; strengthening the souls of the disciples, encouraging them to continue in the faith&hellip;when they had appointed elders for them in every church.</td>
			<td>&nbsp;</td>
			<td>&nbsp;</td>
			<td><strong>Evangelism, discipleship,</strong>
			<p><strong>leadership installment and</strong></p>

			<p><strong>community formation.</strong></p>

			<p><strong>New churches formed</strong></p>
			</td>
		</tr>
		<tr>
			<td>Acts 14:26-28: after returning to Antioch they spent a long time with the disciples.</td>
			<td>&nbsp;</td>
			<td>&nbsp;</td>
			<td>&nbsp;</td>
		</tr>
		<tr>
			<td colspan="3"><strong>Other Key Events</strong>: Council at Jerusalem (Acts 15)</td>
			<td><strong>Church/Ekklesia:</strong> Acts 14:23;
			<p>Acts 14:27</p>
			</td>
		</tr>
	</tbody>
</table>

<h1><strong>2nd Missionary Journey AD 49-52 Galatia, Macedonia, Greece</strong></h1>

<table id="breakout_room">
	<tbody>
		<tr>
			<th>Key References</th>
			<th>The Disciples&rsquo; Practices</th>
			<th>The Results</th>
			<th>Recorded / Noticed</th>
		</tr>
		<tr>
			<td>Acts 16:5: So, the churches were being strengthened in the faith and were increasing in number daily.</td>
			<td>&nbsp;</td>
			<td>&nbsp;</td>
			<td>Spiritual &amp; numeric growth.</td>
		</tr>
		<tr>
			<td>Acts 17:11: they received the word with great eagerness, examining the Scriptures daily&hellip;</td>
			<td>&nbsp;</td>
			<td>&nbsp;</td>
			<td>The role and impact of God&rsquo;s word/Churches are renewed</td>
		</tr>
		<tr>
			<td>Acts 17:17: So, he reasoned in the synagogue with the Jews and the devout persons, and in the marketplace every day with those who happened to be there.</td>
			<td>&nbsp;</td>
			<td>&nbsp;</td>
			<td><strong>Targeted</strong> and <strong>open, broad-sowing, </strong>regular, persuasive <strong>evangelism</strong></td>
		</tr>
		<tr>
			<td>Acts 18:4: And he reasoned in the synagogue every Sabbath and tried to persuade Jews and Greeks.</td>
			<td>&nbsp;</td>
			<td>&nbsp;</td>
			<td>&nbsp;</td>
		</tr>
		<tr>
			<td>Acts 18:11: And he stayed [in Corinth] a year and six months, teaching the word of God among them.</td>
			<td>&nbsp;</td>
			<td>&nbsp;</td>
			<td>Dedicated time to building disciples</td>
		</tr>
		<tr>
			<td colspan="3"><strong>Other Key Events: </strong>The Gospel spread <strong>through the leadership</strong> team (Paul, Silas, Timothy, Jason), saw healings, experienced persecution, a jailor came to Christ, focused on cities. Then they went back to Antioch and &ldquo;spent some time there.&rdquo;</td>
			<td><strong>Church/Ekklesia: </strong>Acts 15:3-4; Acts 15:22; Acts 15:41; Acts 16:5; Acts 18:22</td>
		</tr>
	</tbody>
</table>

<h1><strong>3rd Missionary Journey AD 53-57 Asia, Macedonia, Greece</strong></h1>

<table id="breakout_room">
	<tbody>
		<tr>
			<th>Key References</th>
			<th>The Disciples&rsquo; Practices</th>
			<th>The Results</th>
			<th>Recorded / Noticed</th>
		</tr>
		<tr>
			<td>Acts 19:8-11: [in Ephesus] for three months spoke boldly, reasoning and persuading them about the kingdom of God. But when some became stubborn and continued in unbelief, speaking evil of the Way before the congregation, he withdrew from them and took the disciples with him, reasoning daily in the hall of Tyrannus. This continued for two years, so that all the residents of Asia heard the word of the Lord, both Jews and Greeks. And God was doing extraordinary miracles by the hands of Paul&hellip;</td>
			<td>&nbsp;</td>
			<td>&nbsp;</td>
			<td><strong>Discipleship</strong>
			<p><strong>Evangelism impact &amp; exposure</strong></p>
			</td>
		</tr>
		<tr>
			<td>Acts 19:17-18. 20: And this became known to all the residents of Ephesus, both Jews and Greeks. And fear fell upon them all, and the name of the Lord Jesus was extolled. Also, many of those who were now believers came, confessing and divulging their practices&hellip; So, the word of the Lord continued to increase and prevail mightily.</td>
			<td>&nbsp;</td>
			<td>&nbsp;</td>
			<td><strong>Well-being</strong>
			<p><strong>Transformation story</strong></p>
			</td>
		</tr>
		<tr>
			<td colspan="3"><strong>Other Key Events: </strong>He went back to many of the young churches to &ldquo;strengthen them&rdquo;. Eventually they landed in Ephesus for 2 years in the Hall of Tyrannus. The hand of the Lord was on them as they went from &ldquo;place to place.&rdquo; (Acts 19:13-19). People left their previous life and rejected &ldquo;their practices&rdquo; as the Lord Jesus was being magnified.</td>
			<td><strong>Church/Ekklesia: </strong>Acts 19:32; Acts 19:39; Acts 19:41; Acts 20:17; Acts 20:28&nbsp;</td>
		</tr>
	</tbody>
</table>

<h1><strong>Roman Prison AD 60-62</strong></h1>

<table id="breakout_room">
	<tbody>
		<tr>
			<th>Key References</th>
			<th>The Disciples&rsquo; Practices</th>
			<th>The Results</th>
			<th>Recorded / Noticed</th>
		</tr>
		<tr>
			<td>Acts: 28:30-31: He lived there two whole years at his own expense, and welcomed all who came to him, proclaiming the kingdom of God and teaching about the Lord Jesus Christ with all boldness and without hindrance.</td>
			<td>&nbsp;</td>
			<td>&nbsp;</td>
			<td>Bold, regular evangelism and discipleship</td>
		</tr>
		<tr>
			<td colspan="3"><strong>Other Key Events: </strong>Paul&rsquo;s fourth journey took him to Asia, Macedonia, Cyprus, Crete, into the Adriatic Sea, Malta and to Rome.</td>
			<td>&nbsp;</td>
		</tr>
	</tbody>
</table>
<br />



<!-- begin sdcard languageFooterDiscrete -->
<!-- end sdcard languageFooterDiscrete -->
</div><!--- Created by publishPage-->

</template>
<!-- begin sdcard Footer -->
<!-- end sdcard Footer -->