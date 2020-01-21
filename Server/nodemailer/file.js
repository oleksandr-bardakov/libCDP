function getFile(info) {
	return `<html>
		<body style='background-color: #0e0e0e; margin: 0;'>
			<img src='https://uaets.akvelon.net/i/logo.png' alt="logo" />
				<table cellspacing='0' cellpadding='0' border='0' width='600' align='center'>
					<tr style='text-align: center; font-size: 120%; display: block;'>
						<tr style='text-align: center;'>
							<td style='padding-top: 20px; font-size: 120%;'>
								<h2 style='color: #FFFFFF' >Invite to play</h2>
								<p style='color: #FFFFFF'>${info.login} invited you to play in soccer</p>
								<p style='color: #FFFFFF'>All players in game:</p>
							</td>
						</tr>
					<tr style='text-align: center;'>
						<td style='font-size: 120%; padding-top: 20px; color: #FFFFFF;'>${info.invitedUsers ? info.invitedUsers : info.creator}
						</td>
					</tr>
					<tr style='text-align: center;'>
						<td style='font-size: 120%; padding-top: 20px;'>
							<h4 style='color: #FFFFFF;'>Info</h4>
						</td>
					<tr style='text-align: center;'>
						<td style='font-size: 120%; padding-top: 20px;'>
							<p style='color: #FFFFFF'>Game starting in ${info.timeStart} and finish in ${info.timeEnd}</p>
							<p style='color: #FFFFFF'>Relax and have fun ;)</p>
						</td>
					</tr>
				</tr>
			</tr>
		</table>
	</body>
</html>`
}

module.exports = getFile;