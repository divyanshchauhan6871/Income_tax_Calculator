getval = () => {
    var ctc = Number.parseInt(document.getElementById("input1").value);
    var house = Number.parseInt(document.getElementById("input2").value);
    var other = Number.parseInt(document.getElementById("input3").value);
    var standard_deduction = 50000
    var taxable2=ctc+house+other-standard_deduction
    console.log(taxable2)
    if (taxable2 < 250000) {
        var newtax = 0
    }
    else if (taxable2 >= 250000 && taxable2 < 500000) {
        var newtax = (0.05 * taxable2)
    }
    else if (taxable2 >= 500000 && taxable2 < 750000) {
        var newtax = (0.05 * 250000 + 0.1 * (taxable2 - 500000))
    }
    else if (taxable2 >= 750000 && taxable2 < 1000000) {
        var newtax = (0.05 * 250000 + 0.1 * 250000 + .15 * (taxable2 - 750000))
    }
    else if (taxable2 >= 1000000 && taxable2 < 1250000) {
        var newtax = (0.05 * 250000 + 0.1 * 250000 + .15 * 250000 + 0.2 * (taxable2 - 1000000))
    }
    else if (taxable2 >= 1250000 && taxable2 < 1500000) {
        var newtax = (0.05 * 250000 + 0.1 * 250000 + .15 * 250000 + 0.2 * 250000 + 0.25 * (taxable2 - 1250000))
    }
    else
        var newtax = (0.05 * 250000 + 0.1 * 250000 + .15 * 250000 + 0.2 * 250000 + 0.25 * 250000 + 0.3 * (taxable2 - 1500000))
    console.log(newtax)
    if(taxable2>0){
        var tablebox = document.getElementById("conclusion")
        tablebox.innerHTML = `<button class="btn" style="background-color: rgb(214, 139, 0) ;color: white;font-weight: 400;">Your taxable income is : ${taxable2}.</button><br><br>
    <button class="btn" style="background-color: rgb(214, 139, 0) ;color: white;font-weight: 400;">Tax to be paid is ${newtax}.</button>
  `
    }
    else
    alert("You might have not filled all the inputs")
}