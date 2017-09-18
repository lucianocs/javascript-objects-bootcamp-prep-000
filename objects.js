var playlist = new Object({ ISIS: 'Carry' })

function updatePlaylist(palylist,artist_name,title){
  palylist[artist_name] = title;
  return palylist
}

function removeFromPlaylist(playlist,artist_name){
  delete playlist.artist_name;
  return playlist
}
