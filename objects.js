var playlist = new Object({ ISIS: 'Carry' })

function updatePlaylist(palylist,artist_name,title){
  palylist[artist_name] = title;
  return palylist
}