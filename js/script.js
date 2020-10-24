$(document).ready(function(){
    $('.dropMain .dropMainLink').click(function(){
        $('#dropDownText').text($('#'+this.id+' a').text().trim())
        
    })
})