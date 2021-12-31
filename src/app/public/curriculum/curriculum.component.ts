import { Component, OnInit } from '@angular/core';
import { Skill } from 'src/app/core/shared/models/portafolio.models';
import { PortafolioService } from 'src/app/core/shared/services/portafolio.service';

//Generar PDF
import jsPDF from 'jspdf'; // librería que genera el pdf
import html2canvas from 'html2canvas'; // librería que convierte el html a png

@Component({
  selector: 'app-curriculum',
  templateUrl: './curriculum.component.html',
  styleUrls: ['./curriculum.component.css'],
})
export class CurriculumComponent implements OnInit {
  public skills: Array<Skill> = [];
  public isDownloadPDF: boolean = false;
  constructor(private portafolioService: PortafolioService) {
    this.portafolioService.getSkills().subscribe(
      (data) => {
        this.skills = data.skills;
      },
      (err) => {
        console.warn(err);
      }
    );
  }

  ngOnInit(): void {
    this.subirInicio();
  }

  // Funcion para subir al inicio
  subirInicio(): void {
    window.scroll(0, 0);
  }

  async downloadPDF() {
    if (this.isDownloadPDF == false) {
      const usuarioImpresor = `invitado`;
      const titulo = 'curriculum';
      this.isDownloadPDF = true;
      let fecha = new Date().toLocaleString('es-PY', {
        timeZone: 'America/Asuncion',
      });
      const curriculum = document.getElementById('curriculum');
      const altoCurriculum = curriculum?.offsetHeight || 841;
      const anchoCurriculum = curriculum?.offsetWidth || 595;
      const doc = new jsPDF('p', 'pt', [anchoCurriculum, altoCurriculum]);
      //const doc = new jsPDF('p', 'pt', 'a4');

      // Extraemos el elemento
      const options = {
        background: '#000000',
        scale: 5,
      };
      let pageHeight = doc.internal.pageSize.getHeight(); //caclulamos la altura de la página
      let DATA: any[] = []; //la DATA es en donde almacenamos todos los elementos html que pasaremos al pdf
      //cargamos un elemento del DOM a la DATA, para luego cargar al pdf
      DATA.push(curriculum);

      //Dimensiones de X e Y en la hoja
      let bufferY = 0; //La posición vertical dentro de la hoja

      const bufferX = 0;

      for await (let elemento of DATA) {
        //Creamos la imagen canvas
        await html2canvas(elemento, options).then((canvas) => {
          const img = canvas.toDataURL('image/PNG');
          // Add image Canvas to PDF
          const imgProps = (doc as any).getImageProperties(img);
          const pdfWidth = doc.internal.pageSize.getWidth() - 2 * bufferX;
          const pdfHeight = (imgProps.height * pdfWidth) / imgProps.width;
          //agregamos al doc la img
          doc.addImage(
            img,
            'PNG',
            bufferX,
            bufferY,
            pdfWidth,
            pdfHeight,
            undefined,
            'FAST'
          );
          //si se necesita mas de una hoja agregamos otra pagina
          if (bufferY >= pageHeight) {
            doc.addPage();
            bufferY = 0;
          }
        });
      }
      //Creamos el pdf y descargamos
      doc.save(`${fecha}_${titulo}_matias-pinto.pdf`);

      //Cambiamos el estado de Download
      this.isDownloadPDF = false;
    }
  }
}
