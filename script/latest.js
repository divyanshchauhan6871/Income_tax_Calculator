getval = () => {
    var ctc = Number.parseInt(document.getElementById("input1").value);
    var house = Number.parseInt(document.getElementById("input2").value);
    var other = Number.parseInt(document.getElementById("input3").value);
    var standard_deduction = 50000
    var taxable3 = ctc + house + other - standard_deduction
    console.log(taxable3)
    if (taxable3 < 300000) {
        var latesttax = 0
    }
    else if (taxable3 >= 300000 && taxable3 < 600000) {
        var latesttax = 0.05 * (taxable3 - 300000)
    }
    else if (taxable3 >= 600000 && taxable3 < 900000) {
        var latesttax = (0.05 * 300000) + 0.1 * (taxable3 - 600000)
    }
    else if (taxable3 >= 900000 && taxable3 < 1200000) {
        var latesttax = (0.05 * 300000) + 0.1 * 300000 + .15 * (taxable3 - 900000)
    }
    else if (taxable3 >= 1200000 && taxable3 < 1500000) {
        var latesttax = 0.05 * 300000 + 0.1 * 300000 + .15 * 300000 + 0.2 * (taxable3 - 1200000)
    }
    else {
        var latesttax = 0.05 * 300000 + 0.1 * 300000 + .15 * 300000 + 0.2 * 300000 + 0.3 * 300000 + 0.3 * (taxable3 - 1500000)
    }
    if (taxable3 > 0) {
        console.log(latesttax)
        var tablebox = document.getElementById("conclusion")
        tablebox.innerHTML = `<button class="btn" style="background-color: rgb(214, 139, 0) ;color: white;font-weight: 400;">Your taxable income is : ${taxable3}.</button><br><br>
    <button class="btn" style="background-color: rgb(214, 139, 0) ;color: white;font-weight: 400;">Tax to be paid is ${latesttax}.</button>
  `
    }
    else {
        alert("You might have not filled all the inputs")
    }
}