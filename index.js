document.getElementById('output').style.visibility = 'hidden';
            document.getElementById('dollarInput').addEventListener('input', function (e) {
                document.getElementById('output').style.visibility = 'visible';
                let money = e.target.value;
                document.getElementById('ArmenianOutput').innerHTML = money * 484.13;
                document.getElementById('AfghanOutput').innerHTML = money * 75.85;
                document.getElementById('AlbanianOutput').innerHTML = money * 108.93;
                document.getElementById('AlgerianOutput').innerHTML = money * 118.50;
                document.getElementById('AngolanOutput').innerHTML = money * 304.48
                document.getElementById('ArgentineOutput').innerHTML = money * 36.45
                document.getElementById('ArubanOutput').innerHTML = money * 0.49
            });