/**
 * Spanish Tool Content / Contenido de Herramientas en Español
 * Requirements: 3.1 - Multi-language support
 * 
 * Contains detailed descriptions, how-to steps, use cases, and FAQs for all 67 tools
 */

import type { ToolContent } from '@/types/tool';

/**
 * Spanish tool content map
 * Each tool has: title, metaDescription, keywords, description, howToUse (3+ steps), useCases (3+ scenarios), faq (3+ questions)
 */
export const toolContentEs: Record<string, ToolContent> = {
  // ==================== HERRAMIENTAS POPULARES ====================
  'pdf-multi-tool': {
    title: 'Herramienta Múltiple PDF',
    metaDescription: 'Editor PDF todo en uno: combina, divide, organiza, elimina, rota y extrae páginas en una sola herramienta.',
    keywords: ['herramienta múltiple pdf', 'editor pdf', 'combinar pdf', 'dividir pdf', 'organizar pdf'],
    description: '<p>La Herramienta Múltiple PDF es tu solución integral para todas las tareas de gestión de páginas PDF. Combina múltiples operaciones en una única interfaz intuitiva.</p><p>Todo el procesamiento ocurre en tu navegador, asegurando privacidad completa.</p>',
    howToUse: [
      { step: 1, title: 'Sube tu PDF', description: 'Arrastra y suelta tu archivo PDF o haz clic para seleccionar.' },
      { step: 2, title: 'Elige la Operación', description: 'Selecciona entre combinar, dividir, organizar, eliminar, rotar o extraer páginas.' },
      { step: 3, title: 'Procesa y Descarga', description: 'Haz clic en procesar y descarga tu PDF modificado.' },
    ],
    useCases: [
      { title: 'Preparación de Documentos', description: 'Prepara documentos eliminando páginas innecesarias y reordenando contenido.', icon: 'file-check' },
      { title: 'Ensamblaje de Informes', description: 'Combina secciones de informes en un único documento profesional.', icon: 'book-open' },
      { title: 'Gestión de Archivos', description: 'Divide archivos grandes y extrae páginas relevantes.', icon: 'archive' },
    ],
    faq: [
      { question: '¿Cuántos PDFs puedo procesar?', answer: 'Puedes procesar hasta 10 archivos PDF simultáneamente, con un tamaño máximo de 500MB.' },
      { question: '¿Se conservan los marcadores?', answer: 'Sí, al combinar PDFs se conservan los marcadores existentes.' },
      { question: '¿Hay límite de páginas?', answer: 'No hay límite estricto. La herramienta maneja documentos con cientos de páginas.' },
    ],
  },

  'merge-pdf': {
    title: 'Combinar PDF',
    metaDescription: 'Combina múltiples archivos PDF en un solo documento. Combinador de PDF gratuito con reordenamiento.',
    keywords: ['combinar pdf', 'unir pdf', 'fusionar pdf', 'combinador pdf'],
    description: '<p>Combinar PDF te permite unir múltiples documentos PDF en un solo archivo. Sube tus archivos, ordénalos y combínalos en un documento cohesivo.</p><p>Todo ocurre localmente en tu navegador para máxima privacidad.</p>',
    howToUse: [
      { step: 1, title: 'Sube Archivos PDF', description: 'Arrastra y suelta múltiples archivos PDF o haz clic para seleccionar.' },
      { step: 2, title: 'Ordena los Archivos', description: 'Arrastra las miniaturas para ordenarlos como desees.' },
      { step: 3, title: 'Combina y Descarga', description: 'Haz clic en Combinar y descarga tu PDF unificado.' },
    ],
    useCases: [
      { title: 'Combinar Informes', description: 'Une informes mensuales en un documento anual.', icon: 'file-text' },
      { title: 'Crear Portafolios', description: 'Combina documentos de proyectos en un portafolio profesional.', icon: 'briefcase' },
      { title: 'Consolidar Facturas', description: 'Une facturas para propósitos contables.', icon: 'receipt' },
    ],
    faq: [
      { question: '¿Cuántos PDFs puedo combinar?', answer: 'Hasta 100 archivos PDF con un tamaño total de 500MB.' },
      { question: '¿Se mantiene la calidad?', answer: 'Sí, se preserva la calidad original sin compresión.' },
      { question: '¿Puedo combinar PDFs protegidos?', answer: 'Necesitas descifrarlos primero con nuestra herramienta Descifrar PDF.' },
    ],
  },

  'rotate-custom': {
    title: 'Rotar por Grados Personalizados',
    metaDescription: 'Rota páginas PDF en cualquier ángulo. Rotación precisa para enderezar documentos escaneados.',
    keywords: ['rotar pdf ángulo personalizado', 'enderezar pdf', 'deskew pdf', 'rotación personalizada pdf'],
    description: '<p>Rotar por Grados Personalizados te da control preciso sobre la orientación de tus páginas PDF. A diferencia de las herramientas estándar que solo rotan en incrementos de 90 grados, esta herramienta te permite rotar páginas en cualquier ángulo específico.</p><p>Perfecto para enderezar documentos escaneados torcidos o ajustar diagramas. Puedes corregir páginas individuales o aplicar la misma rotación a todo el documento.</p><p>Todo el procesamiento ocurre localmente en tu navegador, asegurando privacidad total mientras logras una alineación perfecta.</p>',
    howToUse: [
      { step: 1, title: 'Sube tu PDF', description: 'Sube el archivo PDF con las páginas que necesitas rotar.' },
      { step: 2, title: 'Establece el Ángulo', description: 'Ingresa el grado exacto de rotación para cada página, o un ángulo para todas.' },
      { step: 3, title: 'Vista Previa y Ajuste', description: 'Usa la vista previa en tiempo real para asegurar una alineación perfecta.' },
      { step: 4, title: 'Aplica y Descarga', description: 'Haz clic en Rotar para aplicar los cambios y descargar tu PDF enderezado.' },
    ],
    useCases: [
      { title: 'Documentos Escaneados', description: 'Endereza páginas escaneadas que quedaron torcidas.', icon: 'scan' },
      { title: 'Dibujos Técnicos', description: 'Ajusta la orientación de planos y diagramas con precisión.', icon: 'ruler' },
      { title: 'Diseños Creativos', description: 'Crea diseños únicos rotando páginas en ángulos artísticos.', icon: 'pen-tool' },
    ],
    faq: [
      { question: '¿Puedo rotar con decimales?', answer: 'Actualmente soporta grados enteros, pero estamos trabajando en precisión decimal.' },
      { question: '¿Afecta el contenido?', answer: 'El contenido se rota visualmente. El tamaño de página se ajusta automáticamente.' },
      { question: '¿Puedo rotar solo una página?', answer: 'Sí, puedes establecer un ángulo personalizado para cualquier página individual.' },
    ],
  },

  'grid-combine': {
    title: 'Combinar en Cuadrícula PDF',
    metaDescription: 'Combinar múltiples archivos PDF en páginas individuales con un diseño de cuadrícula flexible. Organice 2, 4, 6, 9 o más PDF por página con bordes y espaciado.',
    keywords: ['combinar cuadrícula', 'fusionar pdf cuadrícula', 'collage pdf', 'múltiples pdf una página', 'pdf n-up', 'cuadrícula pdf'],
    description: `
      <p>La herramienta Combinar en Cuadrícula ofrece una forma única de fusionar múltiples archivos PDF separados en páginas individuales. A diferencia de la herramienta estándar "Fusionar PDF" que simplemente añade páginas, o la herramienta "N-Up" que reorganiza páginas de un solo documento, Combinar en Cuadrícula toma múltiples archivos de entrada y los organiza uno al lado del otro en un diseño de cuadrícula personalizable.</p>
      <p>Puede elegir entre varias configuraciones de cuadrícula como 2x1, 2x2, 3x3, etc. Esto es perfecto para comparar múltiples documentos, crear folletos de diferentes fuentes o imprimir versiones compactas de varios archivos.</p>
      <p>Personalice la salida controlando el tamaño de página, la orientación, los márgenes, el espaciado y los bordes. Todo el procesamiento ocurre localmente en su navegador para máxima privacidad.</p>
    `,
    howToUse: [
      { step: 1, title: 'Subir Archivos PDF', description: 'Suba dos o más archivos PDF que desee combinar. Puede reorganizarlos en el orden deseado.' },
      { step: 2, title: 'Elegir Diseño de Cuadrícula', description: 'Seleccione el diseño de cuadrícula deseado (ej: 2x2 para 4 archivos por página, 3x3 para 9 archivos por página).' },
      { step: 3, title: 'Personalizar Apariencia', description: 'Ajuste configuraciones como tamaño de página (A4, Carta), orientación, espaciado entre elementos y bordes.' },
      { step: 4, title: 'Combinar y Descargar', description: 'Haga clic en "Combinar PDFs" para generar su nuevo documento con diseño de cuadrícula y descargue el resultado.' },
    ],
    useCases: [
      { title: 'Comparación Visual', description: 'Coloque diferentes versiones de un diseño o documento una al lado de la otra en una sola página para una fácil comparación.', icon: 'layout-grid' },
      { title: 'Imprimir Folletos', description: 'Combine múltiples documentos cortos o diapositivas en una sola hoja para ahorrar costos de impresión.', icon: 'printer' },
      { title: 'Creación de Portafolios', description: 'Muestre múltiples archivos de proyecto en una vista general de cuadrícula limpia y organizada.', icon: 'image' },
    ],
    faq: [
      { question: '¿En qué se diferencia de N-Up?', answer: 'N-Up toma páginas de UN PDF y las pone en una hoja. Combinar en Cuadrícula toma MÚLTIPLES ARCHIVOS PDF DIFERENTES y los pone en una hoja.' },
      { question: '¿Cuántos archivos puedo combinar?', answer: 'Puede combinar hasta 100 archivos dependiendo de la memoria de su navegador, pero los diseños como 4x4 acomodan hasta 16 archivos por página.' },
      { question: '¿Puedo añadir bordes?', answer: 'Sí, puede añadir bordes alrededor de cada archivo PDF y personalizar el color del borde.' },
    ],
  },

  'split-pdf': {
    title: 'Dividir PDF',
    metaDescription: 'Divide archivos PDF en múltiples documentos. Extrae páginas específicas o divide por rangos.',
    keywords: ['dividir pdf', 'separar pdf', 'extraer páginas', 'divisor pdf'],
    description: '<p>Dividir PDF te permite separar un documento PDF en múltiples archivos. Perfecto para extraer capítulos o crear archivos individuales.</p><p>Procesamiento local para máxima seguridad.</p>',
    howToUse: [
      { step: 1, title: 'Sube tu PDF', description: 'Arrastra y suelta o selecciona el archivo a dividir.' },
      { step: 2, title: 'Define los Rangos', description: 'Ingresa los números de página o rangos (ej: 1-5, 8, 10-15).' },
      { step: 3, title: 'Divide y Descarga', description: 'Haz clic en Dividir y descarga los archivos resultantes.' },
    ],
    useCases: [
      { title: 'Extraer Capítulos', description: 'Divide libros en capítulos individuales.', icon: 'book' },
      { title: 'Separar Escaneos', description: 'Divide documentos escaneados en archivos individuales.', icon: 'copy' },
      { title: 'Crear Material', description: 'Extrae páginas específicas para material de apoyo.', icon: 'presentation' },
    ],
    faq: [
      { question: '¿Puedo dividir en páginas individuales?', answer: 'Sí, selecciona "Dividir cada página" para crear archivos de una página.' },
      { question: '¿Qué pasa con los marcadores?', answer: 'Los marcadores dentro del rango extraído se conservan.' },
      { question: '¿Puedo dividir PDFs protegidos?', answer: 'Primero descifra el PDF con nuestra herramienta Descifrar PDF.' },
    ],
  },

  'compress-pdf': {
    title: 'Comprimir PDF',
    metaDescription: 'Reduce el tamaño de archivos PDF manteniendo la calidad. Compresor de PDF gratuito.',
    keywords: ['comprimir pdf', 'reducir tamaño pdf', 'compresor pdf', 'optimizar pdf'],
    description: '<p>Comprimir PDF reduce el tamaño de tus documentos manteniendo calidad aceptable. Ideal para correos electrónicos y almacenamiento.</p><p>Compresión local en tu navegador.</p>',
    howToUse: [
      { step: 1, title: 'Sube tu PDF', description: 'Arrastra y suelta o selecciona el documento a comprimir.' },
      { step: 2, title: 'Elige el Nivel', description: 'Selecciona: Bajo (mejor calidad), Medio o Alto (menor tamaño).' },
      { step: 3, title: 'Comprime y Descarga', description: 'Haz clic en Comprimir y descarga el PDF optimizado.' },
    ],
    useCases: [
      { title: 'Adjuntos de Correo', description: 'Reduce el tamaño para cumplir límites de correo.', icon: 'mail' },
      { title: 'Publicación Web', description: 'Optimiza PDFs para descarga web rápida.', icon: 'globe' },
      { title: 'Ahorro de Espacio', description: 'Comprime documentos archivados.', icon: 'hard-drive' },
    ],
    faq: [
      { question: '¿Cuánto puedo reducir?', answer: 'PDFs con imágenes pueden reducirse 50-80%. Solo texto tiene menor reducción.' },
      { question: '¿Afecta la calidad del texto?', answer: 'No, el texto permanece nítido. Solo las imágenes se comprimen.' },
      { question: '¿Puedo comprimir varios PDFs?', answer: 'Sí, hasta 10 archivos simultáneamente.' },
    ],
  },

  'edit-pdf': {
    title: 'Editar PDF',
    metaDescription: 'Edita archivos PDF en línea. Añade texto, imágenes, anotaciones y formas.',
    keywords: ['editar pdf', 'editor pdf', 'anotar pdf', 'añadir texto pdf'],
    description: '<p>Editar PDF proporciona herramientas completas para modificar y anotar documentos. Añade texto, imágenes, formas y comentarios.</p><p>Edición local para privacidad total.</p>',
    howToUse: [
      { step: 1, title: 'Sube tu PDF', description: 'Arrastra y suelta o selecciona el documento a editar.' },
      { step: 2, title: 'Selecciona Herramienta', description: 'Elige: texto, resaltado, formas, imágenes o comentarios.' },
      { step: 3, title: 'Guarda y Descarga', description: 'Aplica los cambios y descarga el PDF editado.' },
    ],
    useCases: [
      { title: 'Revisión de Documentos', description: 'Añade comentarios y marcas para revisión colaborativa.', icon: 'message-square' },
      { title: 'Completar Formularios', description: 'Rellena campos y añade firmas sin imprimir.', icon: 'edit-3' },
      { title: 'Redacción', description: 'Elimina información sensible antes de compartir.', icon: 'eye-off' },
    ],
    faq: [
      { question: '¿Puedo editar texto original?', answer: 'Esta herramienta añade anotaciones. Para editar texto existente, usa el documento fuente.' },
      { question: '¿Las ediciones son permanentes?', answer: 'Puedes aplanarlas para hacerlas permanentes o mantenerlas editables.' },
      { question: '¿Hay función deshacer?', answer: 'Sí, soporta deshacer/rehacer y restablecer al original.' },
    ],
  },

  'jpg-to-pdf': {
    title: 'JPG a PDF',
    metaDescription: 'Convierte imágenes JPG a PDF. Combina múltiples JPG en un documento PDF.',
    keywords: ['jpg a pdf', 'jpeg a pdf', 'convertir jpg', 'imagen a pdf'],
    description: '<p>JPG a PDF convierte tus imágenes JPEG en documentos PDF. Combina múltiples imágenes en un único PDF profesional.</p><p>Conversión local para privacidad.</p>',
    howToUse: [
      { step: 1, title: 'Sube Imágenes', description: 'Arrastra y suelta archivos JPG o haz clic para seleccionar.' },
      { step: 2, title: 'Ordena y Configura', description: 'Reordena imágenes y selecciona tamaño de página.' },
      { step: 3, title: 'Convierte y Descarga', description: 'Haz clic en Convertir y descarga el PDF.' },
    ],
    useCases: [
      { title: 'Álbumes de Fotos', description: 'Crea álbumes PDF de fotos para compartir.', icon: 'image' },
      { title: 'Escaneo de Documentos', description: 'Convierte fotos de documentos en PDFs.', icon: 'camera' },
      { title: 'Portafolios', description: 'Compila trabajos fotográficos en un portafolio.', icon: 'folder' },
    ],
    faq: [
      { question: '¿Cuántas imágenes puedo convertir?', answer: 'Hasta 100 imágenes JPG en un único PDF.' },
      { question: '¿Se preserva la calidad?', answer: 'Sí, las imágenes se incrustan en calidad original.' },
      { question: '¿Puedo establecer diferentes tamaños?', answer: 'Se aplica un tamaño uniforme. Las imágenes se escalan manteniendo proporción.' },
    ],
  },

  'sign-pdf': {
    title: 'Firmar PDF',
    metaDescription: 'Añade firmas electrónicas a documentos PDF. Dibuja, escribe o sube tu firma.',
    keywords: ['firmar pdf', 'firma electrónica', 'e-firma', 'firma digital'],
    description: '<p>Firmar PDF te permite añadir firmas electrónicas a tus documentos. Crea tu firma dibujando, escribiendo o subiendo una imagen.</p><p>Firma local para seguridad.</p>',
    howToUse: [
      { step: 1, title: 'Sube tu PDF', description: 'Arrastra y suelta o selecciona el documento a firmar.' },
      { step: 2, title: 'Crea tu Firma', description: 'Dibuja, escribe o sube una imagen de firma.' },
      { step: 3, title: 'Coloca y Descarga', description: 'Posiciona la firma y descarga el PDF firmado.' },
    ],
    useCases: [
      { title: 'Firma de Contratos', description: 'Firma contratos electrónicamente sin imprimir.', icon: 'file-signature' },
      { title: 'Completar Formularios', description: 'Añade firma a formularios y documentos oficiales.', icon: 'clipboard' },
      { title: 'Aprobaciones', description: 'Firma documentos en procesos de aprobación.', icon: 'check-circle' },
    ],
    faq: [
      { question: '¿Es legalmente vinculante?', answer: 'Las firmas electrónicas son reconocidas en la mayoría de países. Consulta regulaciones locales.' },
      { question: '¿Puedo guardar mi firma?', answer: 'Sí, se guarda en el almacenamiento local del navegador.' },
      { question: '¿Puedo añadir múltiples firmas?', answer: 'Sí, añade tantas firmas como necesites en cualquier página.' },
    ],
  },

  'crop-pdf': {
    title: 'Recortar PDF',
    metaDescription: 'Recorta páginas PDF para eliminar márgenes y áreas no deseadas.',
    keywords: ['recortar pdf', 'cortar pdf', 'eliminar márgenes', 'redimensionar pdf'],
    description: '<p>Recortar PDF elimina márgenes y áreas no deseadas de tus páginas. Útil para eliminar espacios en blanco o estandarizar dimensiones.</p><p>Procesamiento local.</p>',
    howToUse: [
      { step: 1, title: 'Sube tu PDF', description: 'Arrastra y suelta o selecciona el documento a recortar.' },
      { step: 2, title: 'Define el Área', description: 'Arrastra los controles o ingresa medidas precisas.' },
      { step: 3, title: 'Recorta y Descarga', description: 'Aplica el recorte y descarga el PDF.' },
    ],
    useCases: [
      { title: 'Eliminar Márgenes', description: 'Recorta márgenes excesivos de documentos escaneados.', icon: 'maximize-2' },
      { title: 'Enfocar Contenido', description: 'Recorta para resaltar áreas específicas.', icon: 'target' },
      { title: 'Estandarizar Páginas', description: 'Haz que todas las páginas tengan el mismo tamaño.', icon: 'square' },
    ],
    faq: [
      { question: '¿El recorte es permanente?', answer: 'Sí, el contenido fuera del área se elimina. Guarda una copia de seguridad.' },
      { question: '¿Puedo recortar páginas diferentes?', answer: 'Sí, puedes aplicar diferentes configuraciones a cada página.' },
      { question: '¿Afecta la calidad del texto?', answer: 'No, el contenido restante mantiene su calidad original.' },
    ],
  },

  'extract-pages': {
    title: 'Extraer Páginas',
    metaDescription: 'Extrae páginas específicas de archivos PDF. Guarda páginas individuales como nuevos documentos.',
    keywords: ['extraer páginas pdf', 'guardar páginas', 'copiar páginas pdf'],
    description: '<p>Extraer Páginas te permite seleccionar y guardar páginas específicas de un PDF como nuevos archivos. Perfecto para crear extractos.</p><p>Extracción local.</p>',
    howToUse: [
      { step: 1, title: 'Sube tu PDF', description: 'Arrastra y suelta o selecciona el documento.' },
      { step: 2, title: 'Selecciona Páginas', description: 'Haz clic en miniaturas o ingresa números de página.' },
      { step: 3, title: 'Extrae y Descarga', description: 'Crea el nuevo PDF con las páginas seleccionadas.' },
    ],
    useCases: [
      { title: 'Crear Extractos', description: 'Extrae páginas relevantes para documentos de referencia.', icon: 'file-minus' },
      { title: 'Compartir Contenido', description: 'Extrae páginas específicas para compartir.', icon: 'share-2' },
      { title: 'Archivar', description: 'Guarda páginas clave para archivo a largo plazo.', icon: 'archive' },
    ],
    faq: [
      { question: '¿Puedo extraer páginas no consecutivas?', answer: 'Sí, selecciona cualquier combinación de páginas.' },
      { question: '¿Se conservan los marcadores?', answer: 'Los marcadores a páginas extraídas se conservan.' },
      { question: '¿Puedo extraer de múltiples PDFs?', answer: 'Esta herramienta trabaja con un PDF. Usa Combinar PDF para múltiples archivos.' },
    ],
  },

  'organize-pdf': {
    title: 'Organizar PDF',
    metaDescription: 'Reordena, duplica y elimina páginas PDF. Arrastra y suelta para reorganizar.',
    keywords: ['organizar pdf', 'reordenar páginas', 'reorganizar pdf'],
    description: '<p>Organizar PDF proporciona una interfaz de arrastrar y soltar para reorganizar páginas. Reordena, duplica o elimina páginas fácilmente.</p><p>Organización local.</p>',
    howToUse: [
      { step: 1, title: 'Sube tu PDF', description: 'Arrastra y suelta o selecciona el documento.' },
      { step: 2, title: 'Reorganiza', description: 'Arrastra miniaturas para reordenar, duplicar o eliminar.' },
      { step: 3, title: 'Guarda y Descarga', description: 'Aplica los cambios y descarga el PDF reorganizado.' },
    ],
    useCases: [
      { title: 'Corregir Orden', description: 'Corrige el orden de páginas escaneadas incorrectamente.', icon: 'arrow-up-down' },
      { title: 'Orden Personalizado', description: 'Ordena páginas para presentaciones específicas.', icon: 'list' },
      { title: 'Eliminar Páginas', description: 'Elimina páginas en blanco o irrelevantes.', icon: 'trash-2' },
    ],
    faq: [
      { question: '¿Puedo duplicar páginas?', answer: 'Sí, duplica cualquier página y colócala donde quieras.' },
      { question: '¿Hay función deshacer?', answer: 'Sí, soporta deshacer/rehacer y restablecer al original.' },
      { question: '¿Puedo organizar múltiples PDFs?', answer: 'Trabaja con un PDF. Primero combínalos con Combinar PDF.' },
    ],
  },

  'delete-pages': {
    title: 'Eliminar Páginas',
    metaDescription: 'Elimina páginas no deseadas de archivos PDF. Selecciona y elimina páginas específicas.',
    keywords: ['eliminar páginas pdf', 'quitar páginas', 'borrar páginas pdf'],
    description: '<p>Eliminar Páginas te permite quitar páginas no deseadas de tus documentos PDF. Elimina páginas en blanco o contenido innecesario.</p><p>Procesamiento local.</p>',
    howToUse: [
      { step: 1, title: 'Sube tu PDF', description: 'Arrastra y suelta o selecciona el documento.' },
      { step: 2, title: 'Selecciona Páginas', description: 'Haz clic en miniaturas o ingresa números de página.' },
      { step: 3, title: 'Elimina y Descarga', description: 'Elimina las páginas seleccionadas y descarga.' },
    ],
    useCases: [
      { title: 'Eliminar Páginas en Blanco', description: 'Limpia documentos eliminando páginas vacías.', icon: 'file-x' },
      { title: 'Eliminar Contenido Sensible', description: 'Elimina páginas confidenciales antes de compartir.', icon: 'shield' },
      { title: 'Optimizar Documentos', description: 'Elimina páginas desactualizadas o irrelevantes.', icon: 'filter' },
    ],
    faq: [
      { question: '¿Puedo recuperar páginas eliminadas?', answer: 'No, la eliminación es permanente. Guarda una copia de seguridad.' },
      { question: '¿Puedo eliminar múltiples páginas?', answer: 'Sí, selecciona y elimina múltiples páginas a la vez.' },
      { question: '¿Afecta los marcadores?', answer: 'Los marcadores a páginas eliminadas se remueven.' },
    ],
  },


  // ==================== EDITAR Y ANOTAR ====================
  'bookmark': {
    title: 'Editar Marcadores',
    metaDescription: 'Añade, edita y organiza marcadores en archivos PDF para navegación fácil.',
    keywords: ['marcadores pdf', 'editar marcadores', 'índice pdf', 'navegación pdf'],
    description: '<p>Editar Marcadores te permite crear y gestionar marcadores en tus documentos PDF para facilitar la navegación.</p><p>Procesamiento local.</p>',
    howToUse: [
      { step: 1, title: 'Sube tu PDF', description: 'Arrastra y suelta o selecciona el documento.' },
      { step: 2, title: 'Gestiona Marcadores', description: 'Añade, edita, elimina o reorganiza marcadores.' },
      { step: 3, title: 'Guarda y Descarga', description: 'Aplica los cambios y descarga el PDF.' },
    ],
    useCases: [
      { title: 'Crear Índice', description: 'Añade marcadores para crear un índice navegable.', icon: 'bookmark' },
      { title: 'Organizar Documentos', description: 'Estructura documentos largos con marcadores.', icon: 'list' },
      { title: 'Mejorar Accesibilidad', description: 'Facilita la navegación en documentos extensos.', icon: 'navigation' },
    ],
    faq: [
      { question: '¿Puedo crear marcadores anidados?', answer: 'Sí, puedes crear jerarquías de marcadores.' },
      { question: '¿Los marcadores funcionan en todos los lectores?', answer: 'Sí, son compatibles con todos los lectores PDF estándar.' },
      { question: '¿Puedo importar marcadores?', answer: 'Puedes crear marcadores manualmente o desde el índice existente.' },
    ],
  },

  'table-of-contents': {
    title: 'Tabla de Contenidos',
    metaDescription: 'Genera automáticamente una tabla de contenidos para documentos PDF.',
    keywords: ['tabla de contenidos pdf', 'índice pdf', 'toc pdf', 'generar índice'],
    description: '<p>Tabla de Contenidos genera automáticamente un índice navegable para tus documentos PDF basado en encabezados.</p><p>Procesamiento local.</p>',
    howToUse: [
      { step: 1, title: 'Sube tu PDF', description: 'Arrastra y suelta o selecciona el documento.' },
      { step: 2, title: 'Configura Opciones', description: 'Selecciona niveles de encabezado y estilo.' },
      { step: 3, title: 'Genera y Descarga', description: 'Crea la tabla de contenidos y descarga.' },
    ],
    useCases: [
      { title: 'Documentos Largos', description: 'Añade navegación a manuales y libros.', icon: 'book' },
      { title: 'Informes', description: 'Crea índices para informes profesionales.', icon: 'file-text' },
      { title: 'Documentación', description: 'Mejora la navegación en documentación técnica.', icon: 'file-code' },
    ],
    faq: [
      { question: '¿Cómo detecta los encabezados?', answer: 'Analiza el formato del texto para identificar encabezados.' },
      { question: '¿Puedo personalizar el estilo?', answer: 'Sí, puedes ajustar fuente, tamaño y formato.' },
      { question: '¿Dónde se inserta la tabla?', answer: 'Puedes elegir insertarla al inicio o en una página específica.' },
    ],
  },

  'page-numbers': {
    title: 'Números de Página',
    metaDescription: 'Añade números de página a documentos PDF con formato personalizable.',
    keywords: ['números de página pdf', 'numerar páginas', 'paginación pdf'],
    description: '<p>Números de Página te permite añadir numeración a tus documentos PDF con posición y formato personalizables.</p><p>Procesamiento local.</p>',
    howToUse: [
      { step: 1, title: 'Sube tu PDF', description: 'Arrastra y suelta o selecciona el documento.' },
      { step: 2, title: 'Configura Formato', description: 'Selecciona posición, fuente, tamaño y formato.' },
      { step: 3, title: 'Aplica y Descarga', description: 'Añade los números y descarga el PDF.' },
    ],
    useCases: [
      { title: 'Documentos Profesionales', description: 'Añade numeración a informes y propuestas.', icon: 'file-text' },
      { title: 'Libros y Manuales', description: 'Numera páginas de publicaciones.', icon: 'book' },
      { title: 'Documentos Legales', description: 'Añade numeración requerida para documentos oficiales.', icon: 'scale' },
    ],
    faq: [
      { question: '¿Puedo excluir páginas?', answer: 'Sí, puedes excluir portadas u otras páginas específicas.' },
      { question: '¿Qué formatos están disponibles?', answer: 'Números arábigos, romanos, letras y formatos personalizados.' },
      { question: '¿Puedo cambiar la posición?', answer: 'Sí, elige entre 9 posiciones diferentes en la página.' },
    ],
  },

  'add-watermark': {
    title: 'Añadir Marca de Agua',
    metaDescription: 'Añade marcas de agua de texto o imagen a documentos PDF.',
    keywords: ['marca de agua pdf', 'watermark pdf', 'añadir marca', 'proteger pdf'],
    description: '<p>Añadir Marca de Agua te permite insertar marcas de agua de texto o imagen en tus documentos PDF para protección o branding.</p><p>Procesamiento local.</p>',
    howToUse: [
      { step: 1, title: 'Sube tu PDF', description: 'Arrastra y suelta o selecciona el documento.' },
      { step: 2, title: 'Configura Marca de Agua', description: 'Ingresa texto o sube imagen, ajusta posición y opacidad.' },
      { step: 3, title: 'Aplica y Descarga', description: 'Añade la marca de agua y descarga.' },
    ],
    useCases: [
      { title: 'Proteger Documentos', description: 'Marca documentos como confidenciales o borradores.', icon: 'shield' },
      { title: 'Branding', description: 'Añade logo de empresa a documentos.', icon: 'image' },
      { title: 'Derechos de Autor', description: 'Protege contenido con marcas de copyright.', icon: 'copyright' },
    ],
    faq: [
      { question: '¿Puedo usar imágenes?', answer: 'Sí, soporta PNG, JPG y otros formatos de imagen.' },
      { question: '¿Puedo ajustar la opacidad?', answer: 'Sí, ajusta la transparencia de 0% a 100%.' },
      { question: '¿Se aplica a todas las páginas?', answer: 'Puedes aplicar a todas o seleccionar páginas específicas.' },
    ],
  },

  'header-footer': {
    title: 'Encabezado y Pie de Página',
    metaDescription: 'Añade encabezados y pies de página personalizados a documentos PDF.',
    keywords: ['encabezado pdf', 'pie de página pdf', 'header footer pdf'],
    description: '<p>Encabezado y Pie de Página te permite añadir texto personalizado en la parte superior e inferior de tus páginas PDF.</p><p>Procesamiento local.</p>',
    howToUse: [
      { step: 1, title: 'Sube tu PDF', description: 'Arrastra y suelta o selecciona el documento.' },
      { step: 2, title: 'Configura Contenido', description: 'Ingresa texto para encabezado y/o pie de página.' },
      { step: 3, title: 'Aplica y Descarga', description: 'Añade el contenido y descarga el PDF.' },
    ],
    useCases: [
      { title: 'Documentos Corporativos', description: 'Añade nombre de empresa y fecha.', icon: 'building' },
      { title: 'Informes', description: 'Incluye título del documento y números de página.', icon: 'file-text' },
      { title: 'Documentos Legales', description: 'Añade información de confidencialidad.', icon: 'scale' },
    ],
    faq: [
      { question: '¿Puedo usar variables?', answer: 'Sí, incluye fecha, número de página y total de páginas.' },
      { question: '¿Puedo personalizar la fuente?', answer: 'Sí, ajusta fuente, tamaño, color y alineación.' },
      { question: '¿Puedo tener diferentes encabezados?', answer: 'Puedes configurar diferentes para páginas pares e impares.' },
    ],
  },

  'invert-colors': {
    title: 'Invertir Colores',
    metaDescription: 'Invierte los colores de documentos PDF para modo oscuro o efectos especiales.',
    keywords: ['invertir colores pdf', 'modo oscuro pdf', 'negativo pdf'],
    description: '<p>Invertir Colores cambia los colores de tu PDF a su negativo, útil para modo oscuro o efectos visuales.</p><p>Procesamiento local.</p>',
    howToUse: [
      { step: 1, title: 'Sube tu PDF', description: 'Arrastra y suelta o selecciona el documento.' },
      { step: 2, title: 'Configura Opciones', description: 'Selecciona páginas y opciones de inversión.' },
      { step: 3, title: 'Invierte y Descarga', description: 'Aplica la inversión y descarga el PDF.' },
    ],
    useCases: [
      { title: 'Modo Oscuro', description: 'Crea versiones de modo oscuro para lectura nocturna.', icon: 'moon' },
      { title: 'Accesibilidad', description: 'Mejora la legibilidad para usuarios con sensibilidad a la luz.', icon: 'eye' },
      { title: 'Efectos Visuales', description: 'Crea efectos de negativo para diseño.', icon: 'palette' },
    ],
    faq: [
      { question: '¿Afecta las imágenes?', answer: 'Sí, todos los elementos visuales se invierten.' },
      { question: '¿Puedo invertir páginas específicas?', answer: 'Sí, selecciona las páginas a invertir.' },
      { question: '¿Es reversible?', answer: 'Sí, invierte de nuevo para restaurar los colores originales.' },
    ],
  },

  'background-color': {
    title: 'Color de Fondo',
    metaDescription: 'Cambia el color de fondo de páginas PDF.',
    keywords: ['color de fondo pdf', 'fondo pdf', 'cambiar fondo'],
    description: '<p>Color de Fondo te permite cambiar el color de fondo de tus páginas PDF para mejorar la legibilidad o estética.</p><p>Procesamiento local.</p>',
    howToUse: [
      { step: 1, title: 'Sube tu PDF', description: 'Arrastra y suelta o selecciona el documento.' },
      { step: 2, title: 'Selecciona Color', description: 'Elige el color de fondo deseado.' },
      { step: 3, title: 'Aplica y Descarga', description: 'Cambia el fondo y descarga el PDF.' },
    ],
    useCases: [
      { title: 'Lectura Cómoda', description: 'Usa fondos crema o sepia para reducir fatiga visual.', icon: 'eye' },
      { title: 'Branding', description: 'Aplica colores corporativos a documentos.', icon: 'palette' },
      { title: 'Impresión', description: 'Prepara documentos con fondos específicos para impresión.', icon: 'printer' },
    ],
    faq: [
      { question: '¿Puedo usar cualquier color?', answer: 'Sí, selecciona cualquier color del selector o ingresa código hex.' },
      { question: '¿Afecta el contenido?', answer: 'No, solo cambia el fondo. El contenido permanece intacto.' },
      { question: '¿Puedo aplicar a páginas específicas?', answer: 'Sí, selecciona las páginas a modificar.' },
    ],
  },

  'text-color': {
    title: 'Cambiar Color de Texto',
    metaDescription: 'Cambia el color del texto en documentos PDF.',
    keywords: ['color de texto pdf', 'cambiar texto pdf', 'modificar texto'],
    description: '<p>Cambiar Color de Texto te permite modificar el color del texto en tus documentos PDF.</p><p>Procesamiento local.</p>',
    howToUse: [
      { step: 1, title: 'Sube tu PDF', description: 'Arrastra y suelta o selecciona el documento.' },
      { step: 2, title: 'Selecciona Colores', description: 'Elige el color original y el nuevo color.' },
      { step: 3, title: 'Aplica y Descarga', description: 'Cambia el color y descarga el PDF.' },
    ],
    useCases: [
      { title: 'Accesibilidad', description: 'Mejora el contraste para mejor legibilidad.', icon: 'eye' },
      { title: 'Branding', description: 'Aplica colores corporativos al texto.', icon: 'palette' },
      { title: 'Impresión', description: 'Prepara documentos para impresión en blanco y negro.', icon: 'printer' },
    ],
    faq: [
      { question: '¿Puedo cambiar colores específicos?', answer: 'Sí, selecciona el color a reemplazar y el nuevo color.' },
      { question: '¿Afecta las imágenes?', answer: 'No, solo afecta el texto del documento.' },
      { question: '¿Funciona con todos los PDFs?', answer: 'Funciona mejor con PDFs que contienen texto real, no imágenes de texto.' },
    ],
  },

  'add-stamps': {
    title: 'Añadir Sellos',
    metaDescription: 'Añade sellos predefinidos o personalizados a documentos PDF.',
    keywords: ['sellos pdf', 'stamps pdf', 'añadir sello', 'marcar pdf'],
    description: '<p>Añadir Sellos te permite insertar sellos predefinidos como "Aprobado", "Confidencial" o sellos personalizados.</p><p>Procesamiento local.</p>',
    howToUse: [
      { step: 1, title: 'Sube tu PDF', description: 'Arrastra y suelta o selecciona el documento.' },
      { step: 2, title: 'Selecciona Sello', description: 'Elige un sello predefinido o crea uno personalizado.' },
      { step: 3, title: 'Coloca y Descarga', description: 'Posiciona el sello y descarga el PDF.' },
    ],
    useCases: [
      { title: 'Aprobación de Documentos', description: 'Marca documentos como aprobados o rechazados.', icon: 'check-circle' },
      { title: 'Confidencialidad', description: 'Añade sellos de confidencial o uso interno.', icon: 'lock' },
      { title: 'Estado de Documentos', description: 'Marca como borrador, final o revisado.', icon: 'tag' },
    ],
    faq: [
      { question: '¿Qué sellos predefinidos hay?', answer: 'Incluye Aprobado, Rechazado, Confidencial, Borrador, Final y más.' },
      { question: '¿Puedo crear sellos personalizados?', answer: 'Sí, crea sellos con texto e imagen personalizados.' },
      { question: '¿Puedo añadir múltiples sellos?', answer: 'Sí, añade tantos sellos como necesites.' },
    ],
  },

  'remove-annotations': {
    title: 'Eliminar Anotaciones',
    metaDescription: 'Elimina todas las anotaciones y comentarios de documentos PDF.',
    keywords: ['eliminar anotaciones pdf', 'quitar comentarios', 'limpiar pdf'],
    description: '<p>Eliminar Anotaciones quita todos los comentarios, resaltados, notas y otras anotaciones de tus documentos PDF.</p><p>Procesamiento local.</p>',
    howToUse: [
      { step: 1, title: 'Sube tu PDF', description: 'Arrastra y suelta o selecciona el documento.' },
      { step: 2, title: 'Selecciona Tipos', description: 'Elige qué tipos de anotaciones eliminar.' },
      { step: 3, title: 'Elimina y Descarga', description: 'Quita las anotaciones y descarga el PDF limpio.' },
    ],
    useCases: [
      { title: 'Limpiar Documentos', description: 'Elimina marcas de revisión antes de publicar.', icon: 'eraser' },
      { title: 'Privacidad', description: 'Quita comentarios antes de compartir externamente.', icon: 'shield' },
      { title: 'Versión Final', description: 'Crea versiones limpias de documentos revisados.', icon: 'file-check' },
    ],
    faq: [
      { question: '¿Qué tipos de anotaciones se eliminan?', answer: 'Comentarios, resaltados, notas adhesivas, dibujos y más.' },
      { question: '¿Puedo eliminar selectivamente?', answer: 'Sí, elige qué tipos de anotaciones eliminar.' },
      { question: '¿Es reversible?', answer: 'No, guarda una copia de seguridad antes de eliminar.' },
    ],
  },

  'form-filler': {
    title: 'Rellenar Formularios',
    metaDescription: 'Rellena formularios PDF interactivos en línea.',
    keywords: ['rellenar formularios pdf', 'completar pdf', 'formularios interactivos'],
    description: '<p>Rellenar Formularios te permite completar formularios PDF interactivos directamente en tu navegador.</p><p>Procesamiento local.</p>',
    howToUse: [
      { step: 1, title: 'Sube tu PDF', description: 'Arrastra y suelta o selecciona el formulario.' },
      { step: 2, title: 'Completa Campos', description: 'Rellena los campos del formulario.' },
      { step: 3, title: 'Guarda y Descarga', description: 'Guarda el formulario completado.' },
    ],
    useCases: [
      { title: 'Formularios Oficiales', description: 'Completa formularios gubernamentales o legales.', icon: 'file-text' },
      { title: 'Solicitudes', description: 'Rellena solicitudes de empleo o servicios.', icon: 'clipboard' },
      { title: 'Contratos', description: 'Completa contratos y acuerdos.', icon: 'file-signature' },
    ],
    faq: [
      { question: '¿Funciona con todos los formularios?', answer: 'Funciona con formularios PDF interactivos estándar.' },
      { question: '¿Puedo guardar y continuar después?', answer: 'Sí, guarda el progreso y continúa más tarde.' },
      { question: '¿Puedo añadir firma?', answer: 'Sí, usa la herramienta Firmar PDF para añadir firmas.' },
    ],
  },

  'form-creator': {
    title: 'Crear Formularios',
    metaDescription: 'Crea formularios PDF interactivos con campos rellenables.',
    keywords: ['crear formularios pdf', 'formularios interactivos', 'campos pdf'],
    description: '<p>Crear Formularios te permite añadir campos interactivos a documentos PDF para crear formularios rellenables.</p><p>Procesamiento local.</p>',
    howToUse: [
      { step: 1, title: 'Sube tu PDF', description: 'Arrastra y suelta o selecciona el documento base.' },
      { step: 2, title: 'Añade Campos', description: 'Inserta campos de texto, casillas, botones de radio, etc.' },
      { step: 3, title: 'Guarda y Descarga', description: 'Guarda el formulario interactivo.' },
    ],
    useCases: [
      { title: 'Formularios de Empresa', description: 'Crea formularios internos rellenables.', icon: 'building' },
      { title: 'Encuestas', description: 'Diseña encuestas y cuestionarios.', icon: 'clipboard-list' },
      { title: 'Solicitudes', description: 'Crea formularios de solicitud profesionales.', icon: 'file-plus' },
    ],
    faq: [
      { question: '¿Qué tipos de campos puedo añadir?', answer: 'Texto, casillas, botones de radio, listas desplegables, fechas y más.' },
      { question: '¿Puedo hacer campos obligatorios?', answer: 'Sí, configura validación y campos requeridos.' },
      { question: '¿Los formularios funcionan en todos los lectores?', answer: 'Sí, son compatibles con lectores PDF estándar.' },
    ],
  },

  'remove-blank-pages': {
    title: 'Eliminar Páginas en Blanco',
    metaDescription: 'Detecta y elimina automáticamente páginas en blanco de documentos PDF.',
    keywords: ['eliminar páginas en blanco', 'quitar páginas vacías', 'limpiar pdf'],
    description: '<p>Eliminar Páginas en Blanco detecta y elimina automáticamente las páginas vacías de tus documentos PDF.</p><p>Procesamiento local.</p>',
    howToUse: [
      { step: 1, title: 'Sube tu PDF', description: 'Arrastra y suelta o selecciona el documento.' },
      { step: 2, title: 'Configura Sensibilidad', description: 'Ajusta el umbral de detección de páginas en blanco.' },
      { step: 3, title: 'Elimina y Descarga', description: 'Quita las páginas en blanco y descarga.' },
    ],
    useCases: [
      { title: 'Limpiar Escaneos', description: 'Elimina páginas en blanco de documentos escaneados.', icon: 'file-minus' },
      { title: 'Optimizar Documentos', description: 'Reduce el tamaño eliminando páginas vacías.', icon: 'zap' },
      { title: 'Preparar para Impresión', description: 'Elimina páginas innecesarias antes de imprimir.', icon: 'printer' },
    ],
    faq: [
      { question: '¿Cómo detecta páginas en blanco?', answer: 'Analiza el contenido de cada página para detectar vacías.' },
      { question: '¿Puedo revisar antes de eliminar?', answer: 'Sí, muestra las páginas detectadas para confirmación.' },
      { question: '¿Detecta páginas casi en blanco?', answer: 'Sí, ajusta la sensibilidad para incluir páginas con poco contenido.' },
    ],
  },


  // ==================== CONVERTIR A PDF ====================
  'image-to-pdf': {
    title: 'Imagen a PDF',
    metaDescription: 'Convierte múltiples formatos de imagen a PDF. Soporta JPG, PNG, WebP, BMP, TIFF, SVG, HEIC.',
    keywords: ['imagen a pdf', 'convertir imagen', 'foto a pdf', 'múltiples imágenes pdf'],
    description: '<p>Imagen a PDF convierte varios formatos de imagen en documentos PDF. Soporta JPG, PNG, WebP, BMP, TIFF, SVG y HEIC.</p><p>Conversión local.</p>',
    howToUse: [
      { step: 1, title: 'Sube Imágenes', description: 'Arrastra y suelta imágenes o haz clic para seleccionar.' },
      { step: 2, title: 'Ordena y Configura', description: 'Reordena y selecciona opciones de página.' },
      { step: 3, title: 'Convierte y Descarga', description: 'Crea el PDF y descarga.' },
    ],
    useCases: [
      { title: 'Documentación', description: 'Convierte capturas de pantalla en documentación.', icon: 'image' },
      { title: 'Portafolios', description: 'Crea portafolios de imágenes en PDF.', icon: 'folder' },
      { title: 'Archivos', description: 'Archiva imágenes en formato PDF.', icon: 'archive' },
    ],
    faq: [
      { question: '¿Qué formatos soporta?', answer: 'JPG, PNG, WebP, BMP, TIFF, SVG y HEIC.' },
      { question: '¿Se mantiene la calidad?', answer: 'Sí, las imágenes se incrustan en calidad original.' },
      { question: '¿Puedo combinar diferentes formatos?', answer: 'Sí, mezcla cualquier formato de imagen soportado.' },
    ],
  },

  'png-to-pdf': {
    title: 'PNG a PDF',
    metaDescription: 'Convierte imágenes PNG a documentos PDF con transparencia preservada.',
    keywords: ['png a pdf', 'convertir png', 'imagen png pdf'],
    description: '<p>PNG a PDF convierte imágenes PNG en documentos PDF, preservando la transparencia cuando es posible.</p><p>Conversión local.</p>',
    howToUse: [
      { step: 1, title: 'Sube Imágenes PNG', description: 'Arrastra y suelta archivos PNG.' },
      { step: 2, title: 'Configura Opciones', description: 'Selecciona tamaño de página y orientación.' },
      { step: 3, title: 'Convierte y Descarga', description: 'Crea el PDF y descarga.' },
    ],
    useCases: [
      { title: 'Gráficos', description: 'Convierte gráficos PNG con transparencia.', icon: 'image' },
      { title: 'Logos', description: 'Crea PDFs de logos para impresión.', icon: 'star' },
      { title: 'Capturas', description: 'Convierte capturas de pantalla en PDF.', icon: 'monitor' },
    ],
    faq: [
      { question: '¿Se preserva la transparencia?', answer: 'La transparencia se preserva en el PDF resultante.' },
      { question: '¿Puedo convertir múltiples PNGs?', answer: 'Sí, combina múltiples PNGs en un PDF.' },
      { question: '¿Qué calidad tiene el resultado?', answer: 'Se mantiene la calidad original de las imágenes.' },
    ],
  },

  'webp-to-pdf': {
    title: 'WebP a PDF',
    metaDescription: 'Convierte imágenes WebP a documentos PDF.',
    keywords: ['webp a pdf', 'convertir webp', 'imagen webp pdf'],
    description: '<p>WebP a PDF convierte imágenes en formato WebP a documentos PDF.</p><p>Conversión local.</p>',
    howToUse: [
      { step: 1, title: 'Sube Imágenes WebP', description: 'Arrastra y suelta archivos WebP.' },
      { step: 2, title: 'Configura Opciones', description: 'Selecciona tamaño de página.' },
      { step: 3, title: 'Convierte y Descarga', description: 'Crea el PDF y descarga.' },
    ],
    useCases: [
      { title: 'Imágenes Web', description: 'Convierte imágenes descargadas de la web.', icon: 'globe' },
      { title: 'Archivos', description: 'Archiva imágenes WebP en formato PDF.', icon: 'archive' },
      { title: 'Documentación', description: 'Incluye imágenes WebP en documentos.', icon: 'file-text' },
    ],
    faq: [
      { question: '¿Qué es WebP?', answer: 'WebP es un formato de imagen moderno desarrollado por Google.' },
      { question: '¿Se mantiene la calidad?', answer: 'Sí, se preserva la calidad de la imagen original.' },
      { question: '¿Soporta WebP animado?', answer: 'Se convierte el primer fotograma de WebP animados.' },
    ],
  },

  'svg-to-pdf': {
    title: 'SVG a PDF',
    metaDescription: 'Convierte gráficos vectoriales SVG a documentos PDF.',
    keywords: ['svg a pdf', 'convertir svg', 'vector a pdf'],
    description: '<p>SVG a PDF convierte gráficos vectoriales SVG en documentos PDF, manteniendo la escalabilidad.</p><p>Conversión local.</p>',
    howToUse: [
      { step: 1, title: 'Sube Archivos SVG', description: 'Arrastra y suelta archivos SVG.' },
      { step: 2, title: 'Configura Opciones', description: 'Selecciona tamaño de página.' },
      { step: 3, title: 'Convierte y Descarga', description: 'Crea el PDF y descarga.' },
    ],
    useCases: [
      { title: 'Logos', description: 'Convierte logos vectoriales para impresión.', icon: 'star' },
      { title: 'Ilustraciones', description: 'Crea PDFs de ilustraciones vectoriales.', icon: 'pen-tool' },
      { title: 'Diagramas', description: 'Convierte diagramas SVG a PDF.', icon: 'git-branch' },
    ],
    faq: [
      { question: '¿Se mantiene la calidad vectorial?', answer: 'Sí, los gráficos permanecen escalables en el PDF.' },
      { question: '¿Soporta SVG complejos?', answer: 'Sí, soporta la mayoría de características SVG.' },
      { question: '¿Puedo convertir múltiples SVGs?', answer: 'Sí, combina múltiples SVGs en un PDF.' },
    ],
  },

  'bmp-to-pdf': {
    title: 'BMP a PDF',
    metaDescription: 'Convierte imágenes BMP a documentos PDF.',
    keywords: ['bmp a pdf', 'convertir bmp', 'bitmap a pdf'],
    description: '<p>BMP a PDF convierte imágenes en formato BMP (bitmap) a documentos PDF.</p><p>Conversión local.</p>',
    howToUse: [
      { step: 1, title: 'Sube Imágenes BMP', description: 'Arrastra y suelta archivos BMP.' },
      { step: 2, title: 'Configura Opciones', description: 'Selecciona tamaño de página.' },
      { step: 3, title: 'Convierte y Descarga', description: 'Crea el PDF y descarga.' },
    ],
    useCases: [
      { title: 'Imágenes Antiguas', description: 'Convierte archivos BMP heredados.', icon: 'image' },
      { title: 'Capturas Windows', description: 'Convierte capturas en formato BMP.', icon: 'monitor' },
      { title: 'Archivos', description: 'Archiva imágenes BMP en PDF.', icon: 'archive' },
    ],
    faq: [
      { question: '¿Qué es BMP?', answer: 'BMP es un formato de imagen sin compresión de Windows.' },
      { question: '¿Se reduce el tamaño?', answer: 'Sí, el PDF resultante suele ser más pequeño que el BMP original.' },
      { question: '¿Se mantiene la calidad?', answer: 'Sí, se preserva la calidad de la imagen.' },
    ],
  },

  'heic-to-pdf': {
    title: 'HEIC a PDF',
    metaDescription: 'Convierte fotos HEIC de iPhone a un PDF listo para enviar, compartir o subir. Une varias imágenes HEIC en un solo archivo.',
    keywords: ['heic a pdf', 'convertir heic a pdf', 'fotos iphone a pdf', 'unir heic en pdf', 'imagen heic a pdf'],
    description: `
      <p>HEIC a PDF convierte fotos HEIC de iPhone en un documento PDF más fácil de compartir, revisar o subir. Es una forma práctica de juntar varias imágenes en un solo archivo cuando no quieres enviar fotos sueltas.</p>
      <p>Sirve bien para escaneos hechos con el móvil, fotos de documentos, comprobantes, formularios firmados y capturas guardadas en formato HEIC. Puedes ordenar las imágenes antes de convertirlas para que el PDF final siga la secuencia correcta. Si después necesitas reducir el tamaño del archivo, puedes continuar con <a href="/es/tools/compress-pdf">comprimir PDF</a>.</p>
      <p>Todo el procesamiento ocurre en tu navegador, así que tus imágenes no se suben al servidor y permanecen privadas.</p>
    `,
    howToUse: [
      { step: 1, title: 'Sube imágenes HEIC', description: 'Arrastra tus archivos HEIC o selecciónalos desde tu dispositivo.' },
      { step: 2, title: 'Ordena y configura', description: 'Reorganiza las fotos y elige tamaño de página u orientación si lo necesitas.' },
      { step: 3, title: 'Convierte y descarga', description: 'Haz clic en convertir para crear un solo PDF y descargarlo.' },
    ],
    useCases: [
      { title: 'Fotos de documentos del iPhone', description: 'Convierte varias fotos HEIC en un PDF único para trámites, entregas o revisiones.', icon: 'smartphone' },
      { title: 'Comprobantes y capturas', description: 'Agrupa imágenes HEIC en un PDF más fácil de archivar y enviar.', icon: 'image' },
      { title: 'Compartir con mejor compatibilidad', description: 'Pasa de HEIC a PDF para evitar problemas con sistemas o personas que no abren HEIC.', icon: 'share-2' },
    ],
    faq: [
      { question: '¿Puedo convertir varias imágenes HEIC a la vez?', answer: 'Sí. Puedes subir varias fotos HEIC y unirlas en un solo PDF en el orden que prefieras.' },
      { question: '¿Sirve para fotos hechas con iPhone?', answer: 'Sí. Está pensado precisamente para el formato HEIC que suele generar el iPhone.' },
      { question: '¿Se mantiene la calidad original?', answer: 'En general sí. El PDF conserva una calidad alta, aunque el resultado final también depende del tamaño de página y de la compresión que apliques después.' },
    ],
  },

  'tiff-to-pdf': {
    title: 'TIFF a PDF',
    metaDescription: 'Convierte imágenes TIFF a documentos PDF.',
    keywords: ['tiff a pdf', 'convertir tiff', 'tif a pdf'],
    description: '<p>TIFF a PDF convierte imágenes TIFF de alta calidad a documentos PDF.</p><p>Conversión local.</p>',
    howToUse: [
      { step: 1, title: 'Sube Imágenes TIFF', description: 'Arrastra y suelta archivos TIFF.' },
      { step: 2, title: 'Configura Opciones', description: 'Selecciona tamaño de página.' },
      { step: 3, title: 'Convierte y Descarga', description: 'Crea el PDF y descarga.' },
    ],
    useCases: [
      { title: 'Documentos Escaneados', description: 'Convierte escaneos TIFF a PDF.', icon: 'scan' },
      { title: 'Fotografía Profesional', description: 'Crea PDFs de fotos de alta calidad.', icon: 'camera' },
      { title: 'Archivos', description: 'Archiva imágenes TIFF en PDF.', icon: 'archive' },
    ],
    faq: [
      { question: '¿Soporta TIFF multipágina?', answer: 'Sí, cada página TIFF se convierte en una página PDF.' },
      { question: '¿Se mantiene la calidad?', answer: 'Sí, se preserva la calidad de la imagen.' },
      { question: '¿Soporta TIFF con capas?', answer: 'Se aplana el TIFF al convertir.' },
    ],
  },

  'txt-to-pdf': {
    title: 'Texto a PDF',
    metaDescription: 'Convierte archivos de texto plano a documentos PDF.',
    keywords: ['texto a pdf', 'txt a pdf', 'convertir texto'],
    description: '<p>Texto a PDF convierte archivos de texto plano (.txt) en documentos PDF con formato personalizable.</p><p>Conversión local.</p>',
    howToUse: [
      { step: 1, title: 'Sube Archivo de Texto', description: 'Arrastra y suelta o pega texto.' },
      { step: 2, title: 'Configura Formato', description: 'Selecciona fuente, tamaño y márgenes.' },
      { step: 3, title: 'Convierte y Descarga', description: 'Crea el PDF y descarga.' },
    ],
    useCases: [
      { title: 'Documentación', description: 'Convierte archivos README y documentación.', icon: 'file-text' },
      { title: 'Código', description: 'Crea PDFs de código fuente.', icon: 'code' },
      { title: 'Notas', description: 'Convierte notas de texto a PDF.', icon: 'sticky-note' },
    ],
    faq: [
      { question: '¿Puedo personalizar la fuente?', answer: 'Sí, selecciona fuente, tamaño y color.' },
      { question: '¿Soporta caracteres especiales?', answer: 'Sí, soporta Unicode y caracteres especiales.' },
      { question: '¿Puedo añadir encabezados?', answer: 'Sí, configura encabezados y pies de página.' },
    ],
  },

  'json-to-pdf': {
    title: 'JSON a PDF',
    metaDescription: 'Convierte datos JSON a documentos PDF formateados.',
    keywords: ['json a pdf', 'convertir json', 'datos a pdf'],
    description: '<p>JSON a PDF convierte datos JSON en documentos PDF con formato legible.</p><p>Conversión local.</p>',
    howToUse: [
      { step: 1, title: 'Sube Archivo JSON', description: 'Arrastra y suelta o pega JSON.' },
      { step: 2, title: 'Configura Formato', description: 'Selecciona estilo de presentación.' },
      { step: 3, title: 'Convierte y Descarga', description: 'Crea el PDF y descarga.' },
    ],
    useCases: [
      { title: 'Documentación API', description: 'Crea documentación de respuestas API.', icon: 'code' },
      { title: 'Informes de Datos', description: 'Genera informes de datos JSON.', icon: 'bar-chart' },
      { title: 'Configuraciones', description: 'Documenta archivos de configuración.', icon: 'settings' },
    ],
    faq: [
      { question: '¿Cómo se formatea el JSON?', answer: 'Se presenta con indentación y resaltado de sintaxis.' },
      { question: '¿Soporta JSON grandes?', answer: 'Sí, maneja archivos JSON de cualquier tamaño.' },
      { question: '¿Puedo personalizar colores?', answer: 'Sí, configura el esquema de colores del resaltado.' },
    ],
  },


  // ==================== CONVERTIR DESDE PDF ====================
  'pdf-to-jpg': {
    title: 'PDF a JPG',
    metaDescription: 'Convierte páginas PDF a imágenes JPG de alta calidad.',
    keywords: ['pdf a jpg', 'pdf a jpeg', 'convertir pdf imagen'],
    description: '<p>PDF a JPG convierte las páginas de tu documento PDF en imágenes JPG de alta calidad.</p><p>Conversión local.</p>',
    howToUse: [
      { step: 1, title: 'Sube tu PDF', description: 'Arrastra y suelta o selecciona el documento.' },
      { step: 2, title: 'Configura Opciones', description: 'Selecciona calidad y páginas a convertir.' },
      { step: 3, title: 'Convierte y Descarga', description: 'Descarga las imágenes JPG.' },
    ],
    useCases: [
      { title: 'Compartir en Redes', description: 'Convierte páginas para compartir en redes sociales.', icon: 'share-2' },
      { title: 'Presentaciones', description: 'Usa páginas PDF como imágenes en presentaciones.', icon: 'presentation' },
      { title: 'Web', description: 'Convierte para usar en sitios web.', icon: 'globe' },
    ],
    faq: [
      { question: '¿Qué calidad tienen las imágenes?', answer: 'Configura la calidad de 1 a 100, con 100 siendo la máxima.' },
      { question: '¿Puedo convertir páginas específicas?', answer: 'Sí, selecciona las páginas a convertir.' },
      { question: '¿Cómo descargo múltiples imágenes?', answer: 'Se descargan como archivo ZIP.' },
    ],
  },

  'pdf-to-png': {
    title: 'PDF a PNG',
    metaDescription: 'Convierte páginas PDF a imágenes PNG con transparencia.',
    keywords: ['pdf a png', 'convertir pdf png', 'pdf imagen png'],
    description: '<p>PDF a PNG convierte las páginas de tu documento PDF en imágenes PNG de alta calidad.</p><p>Conversión local.</p>',
    howToUse: [
      { step: 1, title: 'Sube tu PDF', description: 'Arrastra y suelta o selecciona el documento.' },
      { step: 2, title: 'Configura Opciones', description: 'Selecciona resolución y páginas.' },
      { step: 3, title: 'Convierte y Descarga', description: 'Descarga las imágenes PNG.' },
    ],
    useCases: [
      { title: 'Gráficos', description: 'Extrae gráficos con transparencia.', icon: 'image' },
      { title: 'Diseño', description: 'Usa páginas en proyectos de diseño.', icon: 'palette' },
      { title: 'Documentación', description: 'Incluye páginas como imágenes en documentos.', icon: 'file-text' },
    ],
    faq: [
      { question: '¿Soporta transparencia?', answer: 'Sí, las áreas transparentes se preservan.' },
      { question: '¿Qué resolución tienen?', answer: 'Configura la resolución en DPI (72-600).' },
      { question: '¿Puedo convertir todas las páginas?', answer: 'Sí, convierte todas o selecciona específicas.' },
    ],
  },

  'pdf-to-webp': {
    title: 'PDF a WebP',
    metaDescription: 'Convierte páginas PDF a imágenes WebP optimizadas para web.',
    keywords: ['pdf a webp', 'convertir pdf webp', 'pdf imagen web'],
    description: '<p>PDF a WebP convierte las páginas de tu documento PDF en imágenes WebP optimizadas para web.</p><p>Conversión local.</p>',
    howToUse: [
      { step: 1, title: 'Sube tu PDF', description: 'Arrastra y suelta o selecciona el documento.' },
      { step: 2, title: 'Configura Opciones', description: 'Selecciona calidad y páginas.' },
      { step: 3, title: 'Convierte y Descarga', description: 'Descarga las imágenes WebP.' },
    ],
    useCases: [
      { title: 'Sitios Web', description: 'Crea imágenes optimizadas para web.', icon: 'globe' },
      { title: 'Rendimiento', description: 'Reduce el tamaño de imágenes para carga rápida.', icon: 'zap' },
      { title: 'Blogs', description: 'Convierte páginas para artículos de blog.', icon: 'edit' },
    ],
    faq: [
      { question: '¿Por qué WebP?', answer: 'WebP ofrece mejor compresión que JPG y PNG.' },
      { question: '¿Es compatible con todos los navegadores?', answer: 'Sí, todos los navegadores modernos soportan WebP.' },
      { question: '¿Puedo ajustar la compresión?', answer: 'Sí, configura el nivel de calidad.' },
    ],
  },

  'pdf-to-bmp': {
    title: 'PDF a BMP',
    metaDescription: 'Convierte páginas PDF a imágenes BMP sin compresión.',
    keywords: ['pdf a bmp', 'convertir pdf bmp', 'pdf bitmap'],
    description: '<p>PDF a BMP convierte las páginas de tu documento PDF en imágenes BMP sin compresión.</p><p>Conversión local.</p>',
    howToUse: [
      { step: 1, title: 'Sube tu PDF', description: 'Arrastra y suelta o selecciona el documento.' },
      { step: 2, title: 'Configura Opciones', description: 'Selecciona resolución y páginas.' },
      { step: 3, title: 'Convierte y Descarga', description: 'Descarga las imágenes BMP.' },
    ],
    useCases: [
      { title: 'Compatibilidad', description: 'Crea imágenes para software antiguo.', icon: 'monitor' },
      { title: 'Impresión', description: 'Genera imágenes sin pérdida para impresión.', icon: 'printer' },
      { title: 'Edición', description: 'Crea imágenes para edición sin pérdida.', icon: 'edit' },
    ],
    faq: [
      { question: '¿Por qué BMP?', answer: 'BMP no tiene compresión, ideal para máxima calidad.' },
      { question: '¿Los archivos son grandes?', answer: 'Sí, BMP produce archivos más grandes que otros formatos.' },
      { question: '¿Puedo convertir múltiples páginas?', answer: 'Sí, se descargan como archivo ZIP.' },
    ],
  },

  'pdf-to-tiff': {
    title: 'PDF a TIFF',
    metaDescription: 'Convierte páginas PDF a imágenes TIFF de alta calidad.',
    keywords: ['pdf a tiff', 'convertir pdf tiff', 'pdf tif'],
    description: '<p>PDF a TIFF convierte las páginas de tu documento PDF en imágenes TIFF de alta calidad.</p><p>Conversión local.</p>',
    howToUse: [
      { step: 1, title: 'Sube tu PDF', description: 'Arrastra y suelta o selecciona el documento.' },
      { step: 2, title: 'Configura Opciones', description: 'Selecciona resolución y compresión.' },
      { step: 3, title: 'Convierte y Descarga', description: 'Descarga las imágenes TIFF.' },
    ],
    useCases: [
      { title: 'Impresión Profesional', description: 'Crea imágenes para impresión de alta calidad.', icon: 'printer' },
      { title: 'Archivos', description: 'Archiva documentos en formato TIFF.', icon: 'archive' },
      { title: 'Escaneo', description: 'Convierte para flujos de trabajo de escaneo.', icon: 'scan' },
    ],
    faq: [
      { question: '¿Soporta TIFF multipágina?', answer: 'Sí, puede crear un TIFF multipágina o archivos separados.' },
      { question: '¿Qué compresión usa?', answer: 'Soporta LZW, ZIP y sin compresión.' },
      { question: '¿Qué resolución recomiendas?', answer: '300 DPI para impresión, 150 DPI para pantalla.' },
    ],
  },

  'pdf-to-greyscale': {
    title: 'PDF a Escala de Grises',
    metaDescription: 'Convierte documentos PDF a color a escala de grises.',
    keywords: ['pdf escala de grises', 'pdf blanco y negro', 'convertir pdf gris'],
    description: '<p>PDF a Escala de Grises convierte documentos PDF a color en versiones en escala de grises.</p><p>Conversión local.</p>',
    howToUse: [
      { step: 1, title: 'Sube tu PDF', description: 'Arrastra y suelta o selecciona el documento.' },
      { step: 2, title: 'Configura Opciones', description: 'Selecciona páginas a convertir.' },
      { step: 3, title: 'Convierte y Descarga', description: 'Descarga el PDF en escala de grises.' },
    ],
    useCases: [
      { title: 'Ahorro de Tinta', description: 'Prepara documentos para impresión económica.', icon: 'printer' },
      { title: 'Documentos Formales', description: 'Crea versiones formales en blanco y negro.', icon: 'file-text' },
      { title: 'Accesibilidad', description: 'Mejora la legibilidad para algunos usuarios.', icon: 'eye' },
    ],
    faq: [
      { question: '¿Es reversible?', answer: 'No, guarda una copia del original a color.' },
      { question: '¿Afecta las imágenes?', answer: 'Sí, todas las imágenes se convierten a grises.' },
      { question: '¿Reduce el tamaño del archivo?', answer: 'Puede reducir ligeramente el tamaño.' },
    ],
  },

  'pdf-to-json': {
    title: 'PDF a JSON',
    metaDescription: 'Extrae datos estructurados de documentos PDF a formato JSON.',
    keywords: ['pdf a json', 'extraer datos pdf', 'pdf datos json'],
    description: '<p>PDF a JSON extrae el contenido y estructura de documentos PDF en formato JSON.</p><p>Extracción local.</p>',
    howToUse: [
      { step: 1, title: 'Sube tu PDF', description: 'Arrastra y suelta o selecciona el documento.' },
      { step: 2, title: 'Configura Opciones', description: 'Selecciona qué datos extraer.' },
      { step: 3, title: 'Extrae y Descarga', description: 'Descarga el archivo JSON.' },
    ],
    useCases: [
      { title: 'Procesamiento de Datos', description: 'Extrae datos para procesamiento automatizado.', icon: 'database' },
      { title: 'Integración', description: 'Integra contenido PDF en aplicaciones.', icon: 'plug' },
      { title: 'Análisis', description: 'Analiza estructura y contenido de PDFs.', icon: 'bar-chart' },
    ],
    faq: [
      { question: '¿Qué datos se extraen?', answer: 'Texto, metadatos, estructura de páginas y más.' },
      { question: '¿Extrae tablas?', answer: 'Intenta detectar y estructurar tablas.' },
      { question: '¿Funciona con PDFs escaneados?', answer: 'Para PDFs escaneados, usa primero OCR PDF.' },
    ],
  },


  // ==================== ORGANIZAR Y GESTIONAR ====================
  'ocr-pdf': {
    title: 'OCR PDF',
    metaDescription: 'Reconocimiento óptico de caracteres para hacer PDFs escaneados buscables.',
    keywords: ['ocr pdf', 'reconocimiento texto', 'pdf buscable', 'escaneo a texto'],
    description: '<p>OCR PDF aplica reconocimiento óptico de caracteres a PDFs escaneados para hacerlos buscables y editables.</p><p>Procesamiento local.</p>',
    howToUse: [
      { step: 1, title: 'Sube tu PDF', description: 'Arrastra y suelta el PDF escaneado.' },
      { step: 2, title: 'Selecciona Idioma', description: 'Elige el idioma del documento.' },
      { step: 3, title: 'Procesa y Descarga', description: 'Aplica OCR y descarga el PDF buscable.' },
    ],
    useCases: [
      { title: 'Documentos Escaneados', description: 'Haz buscables documentos escaneados.', icon: 'scan' },
      { title: 'Archivos Históricos', description: 'Digitaliza documentos antiguos.', icon: 'archive' },
      { title: 'Accesibilidad', description: 'Permite lectores de pantalla en PDFs escaneados.', icon: 'eye' },
    ],
    faq: [
      { question: '¿Qué idiomas soporta?', answer: 'Soporta más de 100 idiomas incluyendo español, inglés, chino y más.' },
      { question: '¿Qué precisión tiene?', answer: 'La precisión depende de la calidad del escaneo, típicamente 95%+.' },
      { question: '¿Modifica el aspecto del PDF?', answer: 'No, añade una capa de texto invisible sobre la imagen.' },
    ],
  },

  'alternate-merge': {
    title: 'Combinación Alternada',
    metaDescription: 'Combina dos PDFs alternando páginas de cada documento.',
    keywords: ['combinar alternado', 'intercalar pdf', 'mezclar páginas'],
    description: '<p>Combinación Alternada combina dos PDFs alternando páginas de cada documento, útil para documentos de doble cara.</p><p>Procesamiento local.</p>',
    howToUse: [
      { step: 1, title: 'Sube Dos PDFs', description: 'Arrastra y suelta los dos documentos.' },
      { step: 2, title: 'Configura Orden', description: 'Selecciona el orden de alternancia.' },
      { step: 3, title: 'Combina y Descarga', description: 'Crea el PDF combinado.' },
    ],
    useCases: [
      { title: 'Escaneos Doble Cara', description: 'Combina escaneos de anverso y reverso.', icon: 'copy' },
      { title: 'Documentos Bilingües', description: 'Alterna páginas en dos idiomas.', icon: 'languages' },
      { title: 'Comparación', description: 'Alterna versiones para comparación.', icon: 'git-compare' },
    ],
    faq: [
      { question: '¿Qué pasa si tienen diferente número de páginas?', answer: 'Las páginas extra se añaden al final.' },
      { question: '¿Puedo invertir el orden de uno?', answer: 'Sí, puedes invertir el orden de cualquier documento.' },
      { question: '¿Puedo combinar más de dos PDFs?', answer: 'Esta herramienta es para dos PDFs. Usa Combinar PDF para más.' },
    ],
  },

  'add-attachments': {
    title: 'Añadir Adjuntos',
    metaDescription: 'Añade archivos adjuntos a documentos PDF.',
    keywords: ['adjuntos pdf', 'añadir archivos pdf', 'incrustar archivos'],
    description: '<p>Añadir Adjuntos te permite incrustar archivos dentro de documentos PDF.</p><p>Procesamiento local.</p>',
    howToUse: [
      { step: 1, title: 'Sube tu PDF', description: 'Arrastra y suelta el documento.' },
      { step: 2, title: 'Añade Archivos', description: 'Selecciona los archivos a adjuntar.' },
      { step: 3, title: 'Guarda y Descarga', description: 'Descarga el PDF con adjuntos.' },
    ],
    useCases: [
      { title: 'Documentación', description: 'Incluye archivos de soporte en documentos.', icon: 'paperclip' },
      { title: 'Informes', description: 'Adjunta datos fuente a informes.', icon: 'file-text' },
      { title: 'Contratos', description: 'Incluye anexos en contratos.', icon: 'file-signature' },
    ],
    faq: [
      { question: '¿Qué tipos de archivos puedo adjuntar?', answer: 'Cualquier tipo de archivo: documentos, imágenes, hojas de cálculo, etc.' },
      { question: '¿Hay límite de tamaño?', answer: 'El tamaño total del PDF con adjuntos no debe exceder 500MB.' },
      { question: '¿Cómo se accede a los adjuntos?', answer: 'Los lectores PDF muestran los adjuntos en un panel lateral.' },
    ],
  },

  'extract-attachments': {
    title: 'Extraer Adjuntos',
    metaDescription: 'Extrae archivos adjuntos de documentos PDF.',
    keywords: ['extraer adjuntos pdf', 'descargar adjuntos', 'archivos incrustados'],
    description: '<p>Extraer Adjuntos te permite descargar los archivos incrustados en documentos PDF.</p><p>Procesamiento local.</p>',
    howToUse: [
      { step: 1, title: 'Sube tu PDF', description: 'Arrastra y suelta el documento.' },
      { step: 2, title: 'Revisa Adjuntos', description: 'Ve la lista de archivos adjuntos.' },
      { step: 3, title: 'Extrae y Descarga', description: 'Descarga los adjuntos seleccionados.' },
    ],
    useCases: [
      { title: 'Recuperar Archivos', description: 'Extrae archivos de documentos recibidos.', icon: 'download' },
      { title: 'Organización', description: 'Separa adjuntos para organización.', icon: 'folder' },
      { title: 'Análisis', description: 'Extrae datos adjuntos para análisis.', icon: 'bar-chart' },
    ],
    faq: [
      { question: '¿Cómo sé si un PDF tiene adjuntos?', answer: 'La herramienta muestra todos los adjuntos encontrados.' },
      { question: '¿Puedo extraer adjuntos específicos?', answer: 'Sí, selecciona los adjuntos a extraer.' },
      { question: '¿Se modifica el PDF original?', answer: 'No, solo se extraen copias de los adjuntos.' },
    ],
  },

  'extract-images': {
    title: 'Extraer Imágenes de PDF',
    metaDescription: 'Extrae las imágenes incrustadas de archivos PDF y descárgalas por separado o en ZIP. Filtra iconos e imágenes pequeñas por tamaño.',
    keywords: ['extraer imágenes pdf', 'sacar imágenes de pdf', 'imágenes incrustadas pdf', 'descargar imágenes pdf', 'extraer fotos de pdf'],
    description: `
      <p>Extraer Imágenes de PDF recupera las imágenes ya incrustadas dentro de tus documentos PDF para que puedas descargarlas por separado o en un archivo ZIP. Es una opción útil cuando necesitas reutilizar fotos, gráficos o recursos visuales sin volver a crear el documento.</p>
      <p>A diferencia de herramientas como PDF a JPG, esta función no convierte cada página completa en una imagen. Aquí se extraen los recursos gráficos originales que ya están dentro del PDF, y además puedes filtrar iconos o elementos pequeños definiendo un ancho, alto o tamaño mínimo.</p>
      <p>Todo el procesamiento se realiza localmente en tu navegador. Puedes trabajar con varios PDFs a la vez y conservar la privacidad de dossiers, presentaciones, informes o folletos con material gráfico sensible.</p>
    `,
    howToUse: [
      { step: 1, title: 'Sube uno o varios PDFs', description: 'Arrastra tus archivos PDF o selecciónalos desde tu dispositivo para analizar sus imágenes incrustadas.' },
      { step: 2, title: 'Ajusta los filtros', description: 'Define ancho, alto o tamaño mínimo si quieres excluir iconos, logos pequeños o elementos decorativos.' },
      { step: 3, title: 'Extrae las imágenes', description: 'Haz clic en Extraer para localizar las imágenes originales incluidas dentro del PDF.' },
      { step: 4, title: 'Descarga el resultado', description: 'Descarga cada imagen por separado o reúne todas en un archivo ZIP para trabajar más rápido.' },
    ],
    useCases: [
      { title: 'Recuperar recursos de diseño', description: 'Extrae fotos, gráficos y elementos visuales de brochures, catálogos o dossieres sin exportar página por página.', icon: 'image' },
      { title: 'Reutilizar imágenes en presentaciones', description: 'Obtén las imágenes incrustadas en informes o presentaciones PDF para volver a usarlas en otros materiales.', icon: 'folder' },
      { title: 'Separar activos de documentos recibidos', description: 'Recupera imágenes de PDFs de clientes, proveedores o equipos internos para archivarlas o revisarlas.', icon: 'refresh-cw' },
    ],
    faq: [
      { question: '¿Qué tipo de imágenes puede extraer?', answer: 'La herramienta intenta recuperar las imágenes incrustadas en su formato nativo, como JPEG o PNG. Cuando eso no es posible, exporta los datos de imagen en un formato compatible.' },
      { question: '¿Por qué faltan algunas imágenes?', answer: 'Es posible que se estén filtrando por el tamaño mínimo configurado. Reduce los valores de ancho, alto o tamaño si también quieres extraer iconos o gráficos pequeños.' },
      { question: '¿Sirve para PDFs escaneados?', answer: 'En muchos PDFs escaneados cada página entera se guarda como una sola imagen grande. Si lo que necesitas es convertir cada página en imagen, usa mejor la herramienta PDF a JPG o PDF a imagen.' },
    ],
  },

  'edit-attachments': {
    title: 'Editar Adjuntos',
    metaDescription: 'Gestiona los archivos adjuntos en documentos PDF.',
    keywords: ['editar adjuntos pdf', 'gestionar adjuntos', 'modificar adjuntos'],
    description: '<p>Editar Adjuntos te permite añadir, eliminar y renombrar archivos adjuntos en documentos PDF.</p><p>Procesamiento local.</p>',
    howToUse: [
      { step: 1, title: 'Sube tu PDF', description: 'Arrastra y suelta el documento.' },
      { step: 2, title: 'Gestiona Adjuntos', description: 'Añade, elimina o renombra adjuntos.' },
      { step: 3, title: 'Guarda y Descarga', description: 'Descarga el PDF modificado.' },
    ],
    useCases: [
      { title: 'Actualizar Adjuntos', description: 'Reemplaza adjuntos desactualizados.', icon: 'refresh-cw' },
      { title: 'Limpiar PDFs', description: 'Elimina adjuntos innecesarios.', icon: 'trash-2' },
      { title: 'Organizar', description: 'Renombra adjuntos para mejor organización.', icon: 'edit' },
    ],
    faq: [
      { question: '¿Puedo reemplazar un adjunto?', answer: 'Sí, elimina el existente y añade el nuevo.' },
      { question: '¿Puedo cambiar el nombre?', answer: 'Sí, renombra cualquier adjunto.' },
      { question: '¿Afecta el contenido del PDF?', answer: 'No, solo modifica los adjuntos.' },
    ],
  },

  'divide-pages': {
    title: 'Dividir Páginas',
    metaDescription: 'Divide páginas PDF grandes en múltiples páginas más pequeñas.',
    keywords: ['dividir páginas pdf', 'cortar páginas', 'separar páginas'],
    description: '<p>Dividir Páginas corta páginas PDF grandes en múltiples páginas más pequeñas.</p><p>Procesamiento local.</p>',
    howToUse: [
      { step: 1, title: 'Sube tu PDF', description: 'Arrastra y suelta el documento.' },
      { step: 2, title: 'Configura División', description: 'Selecciona cómo dividir las páginas.' },
      { step: 3, title: 'Divide y Descarga', description: 'Descarga el PDF con páginas divididas.' },
    ],
    useCases: [
      { title: 'Posters', description: 'Divide posters grandes para impresión en partes.', icon: 'layout-grid' },
      { title: 'Planos', description: 'Divide planos grandes en secciones.', icon: 'map' },
      { title: 'Presentaciones', description: 'Divide diapositivas anchas en páginas estándar.', icon: 'presentation' },
    ],
    faq: [
      { question: '¿Cómo se dividen las páginas?', answer: 'Puedes dividir horizontal, vertical o en cuadrícula.' },
      { question: '¿Puedo especificar el tamaño?', answer: 'Sí, define el tamaño de las páginas resultantes.' },
      { question: '¿Se pierde contenido?', answer: 'No, todo el contenido se preserva en las páginas divididas.' },
    ],
  },

  'add-blank-page': {
    title: 'Añadir Página en Blanco',
    metaDescription: 'Inserta páginas en blanco en documentos PDF.',
    keywords: ['añadir página blanco', 'insertar página pdf', 'página vacía'],
    description: '<p>Añadir Página en Blanco te permite insertar páginas vacías en cualquier posición de tu documento PDF.</p><p>Procesamiento local.</p>',
    howToUse: [
      { step: 1, title: 'Sube tu PDF', description: 'Arrastra y suelta el documento.' },
      { step: 2, title: 'Selecciona Posición', description: 'Elige dónde insertar la página en blanco.' },
      { step: 3, title: 'Añade y Descarga', description: 'Inserta la página y descarga.' },
    ],
    useCases: [
      { title: 'Separadores', description: 'Añade páginas en blanco como separadores de sección.', icon: 'file-plus' },
      { title: 'Impresión', description: 'Añade páginas para impresión a doble cara.', icon: 'printer' },
      { title: 'Notas', description: 'Inserta páginas para notas manuscritas.', icon: 'edit' },
    ],
    faq: [
      { question: '¿Puedo añadir múltiples páginas?', answer: 'Sí, añade tantas páginas en blanco como necesites.' },
      { question: '¿Puedo elegir el tamaño?', answer: 'Las páginas en blanco coinciden con el tamaño del documento.' },
      { question: '¿Puedo añadir al inicio o final?', answer: 'Sí, inserta en cualquier posición.' },
    ],
  },

  'reverse-pages': {
    title: 'Invertir PDF - Invertir Orden de Páginas Online Gratis',
    metaDescription: '¿Escaneaste tu PDF al revés? Invierte el orden de páginas de atrás hacia adelante en un clic. 100% gratis, seguro en tu navegador y sin marcas de agua.',
    keywords: [
      'invertir pdf',
      'invertir paginas pdf',
      'invertir orden de paginas pdf',
      'invertir paginas',
      'invertir orden de pdf',
      'pdf al revés',
      'voltear paginas pdf',
      'cambiar orden pdf',
      'invertir orden pdf gratis',
    ],
    description: '<p>Invertir PDF te permite cambiar el orden de las páginas de tu documento en un solo clic, ordenándolas desde la última hasta la primera.</p><p>Es la solución más rápida para corregir documentos o facturas escaneadas en orden inverso por el alimentador automático (ADF). No necesitas arrastrar páginas manualmente una por una: sube tu archivo y el orden se invierte al instante manteniendo la calidad original.</p><p>Todo el proceso se realiza localmente en tu navegador sin subir archivos a servidores externos, garantizando confidencialidad absoluta.</p>',
    howToUse: [
      { step: 1, title: 'Sube tu archivo PDF', description: 'Arrastra y suelta tu documento PDF o selecciónalo desde tu dispositivo sin límite de tamaño.' },
      { step: 2, title: 'Revisa la vista previa invertida', description: 'Comprueba al instante el nuevo orden de páginas (de la última a la primera).' },
      { step: 3, title: 'Descarga tu PDF ordenado', description: 'Haz clic en Invertir y descarga tu documento corregido en segundos.' },
    ],
    useCases: [
      { title: 'Corregir escaneos al revés', description: 'Soluciona documentos escaneados en orden inverso por impresoras o escáneres automáticos.', icon: 'refresh-cw' },
      { title: 'Reorganizar facturas y contratos', description: 'Ordena expedientes y documentos de atrás hacia adelante para su presentación o archivo.', icon: 'presentation' },
      { title: 'Preparación para impresión', description: 'Invierte el orden de páginas para impresoras que apilan las hojas cara arriba.', icon: 'printer' },
    ],
    faq: [
      { question: '¿Cómo invertir el orden de las páginas de un PDF?', answer: 'Solo tienes que subir tu PDF a esta herramienta. Automáticamente invertirá la secuencia de páginas (por ejemplo, de la página 10 a la 1) y podrás descargarlo de inmediato.' },
      { question: '¿Por qué mi PDF quedó en orden inverso?', answer: 'Muchos escáneres de oficina y alimentadores automáticos leen las hojas de atrás hacia adelante, lo que produce un archivo con las páginas invertidas.' },
      { question: '¿Se altera el contenido o la calidad de las páginas?', answer: 'No. El contenido de cada página, las imágenes y el texto permanecen 100% idénticos con su resolución original; únicamente cambia su orden en el documento.' },
      { question: '¿Es seguro para documentos confidenciales?', answer: 'Totalmente seguro. PDFkoi procesa los archivos directamente en tu navegador mediante WebAssembly. Ningún dato se transfiere por internet.' },
    ],
  },

  'rotate-pdf': {
    title: 'Rotar PDF',
    metaDescription: 'Rota páginas PDF 90, 180 o 270 grados.',
    keywords: ['rotar pdf', 'girar páginas', 'orientación pdf'],
    description: '<p>Rotar PDF te permite girar páginas de tu documento 90, 180 o 270 grados.</p><p>Procesamiento local.</p>',
    howToUse: [
      { step: 1, title: 'Sube tu PDF', description: 'Arrastra y suelta el documento.' },
      { step: 2, title: 'Selecciona Rotación', description: 'Elige el ángulo y las páginas a rotar.' },
      { step: 3, title: 'Rota y Descarga', description: 'Aplica la rotación y descarga.' },
    ],
    useCases: [
      { title: 'Corregir Orientación', description: 'Corrige páginas escaneadas con orientación incorrecta.', icon: 'rotate-cw' },
      { title: 'Documentos Mixtos', description: 'Unifica orientación en documentos con páginas mixtas.', icon: 'file-text' },
      { title: 'Presentaciones', description: 'Ajusta orientación para presentaciones.', icon: 'presentation' },
    ],
    faq: [
      { question: '¿Puedo rotar páginas específicas?', answer: 'Sí, selecciona las páginas a rotar.' },
      { question: '¿Qué ángulos están disponibles?', answer: '90° (derecha), 180° (invertir), 270° (izquierda).' },
      { question: '¿Afecta la calidad?', answer: 'No, la rotación no afecta la calidad del contenido.' },
    ],
  },

  'n-up-pdf': {
    title: 'N-Up PDF',
    metaDescription: 'Coloca múltiples páginas PDF en una sola página (2-up, 4-up, etc.).',
    keywords: ['n-up pdf', 'múltiples páginas', '2-up', '4-up', 'imprimir múltiple'],
    description: '<p>N-Up PDF coloca múltiples páginas de tu documento en una sola página, útil para ahorrar papel al imprimir.</p><p>Procesamiento local.</p>',
    howToUse: [
      { step: 1, title: 'Sube tu PDF', description: 'Arrastra y suelta el documento.' },
      { step: 2, title: 'Selecciona Diseño', description: 'Elige 2-up, 4-up, 6-up o 9-up.' },
      { step: 3, title: 'Procesa y Descarga', description: 'Crea el PDF N-up y descarga.' },
    ],
    useCases: [
      { title: 'Ahorro de Papel', description: 'Imprime múltiples páginas por hoja.', icon: 'file-minus' },
      { title: 'Resúmenes', description: 'Crea resúmenes visuales de documentos.', icon: 'layout-grid' },
      { title: 'Revisión', description: 'Revisa documentos con vista general.', icon: 'eye' },
    ],
    faq: [
      { question: '¿Qué significa N-up?', answer: 'N páginas por hoja: 2-up = 2 páginas, 4-up = 4 páginas, etc.' },
      { question: '¿Puedo personalizar el orden?', answer: 'Sí, elige el orden de lectura (izquierda-derecha, arriba-abajo).' },
      { question: '¿Se reduce la calidad?', answer: 'Las páginas se escalan para ajustarse, pero mantienen legibilidad.' },
    ],
  },

  'combine-single-page': {
    title: 'Combinar en Página Única',
    metaDescription: 'Combina todas las páginas PDF en una sola página larga.',
    keywords: ['combinar página única', 'página continua', 'unir páginas'],
    description: '<p>Combinar en Página Única une todas las páginas de tu PDF en una sola página larga continua.</p><p>Procesamiento local.</p>',
    howToUse: [
      { step: 1, title: 'Sube tu PDF', description: 'Arrastra y suelta el documento.' },
      { step: 2, title: 'Configura Opciones', description: 'Selecciona orientación y espaciado.' },
      { step: 3, title: 'Combina y Descarga', description: 'Crea la página única y descarga.' },
    ],
    useCases: [
      { title: 'Infografías', description: 'Crea documentos de desplazamiento continuo.', icon: 'scroll' },
      { title: 'Impresión de Banners', description: 'Prepara documentos para impresión de banners.', icon: 'printer' },
      { title: 'Visualización', description: 'Crea vistas panorámicas de documentos.', icon: 'maximize' },
    ],
    faq: [
      { question: '¿Hay límite de páginas?', answer: 'No hay límite, pero documentos muy largos pueden ser difíciles de manejar.' },
      { question: '¿Puedo añadir espacio entre páginas?', answer: 'Sí, configura el espaciado entre páginas originales.' },
      { question: '¿Funciona con páginas de diferentes tamaños?', answer: 'Sí, las páginas se ajustan al ancho máximo.' },
    ],
  },

  'view-metadata': {
    title: 'Ver Metadatos',
    metaDescription: 'Visualiza los metadatos y propiedades de documentos PDF.',
    keywords: ['ver metadatos pdf', 'propiedades pdf', 'información pdf'],
    description: '<p>Ver Metadatos muestra toda la información de propiedades de tu documento PDF.</p><p>Procesamiento local.</p>',
    howToUse: [
      { step: 1, title: 'Sube tu PDF', description: 'Arrastra y suelta el documento.' },
      { step: 2, title: 'Revisa Metadatos', description: 'Ve título, autor, fechas, palabras clave, etc.' },
      { step: 3, title: 'Exporta si Necesitas', description: 'Exporta los metadatos a JSON.' },
    ],
    useCases: [
      { title: 'Auditoría', description: 'Revisa información de documentos recibidos.', icon: 'search' },
      { title: 'Verificación', description: 'Verifica autor y fechas de documentos.', icon: 'check-circle' },
      { title: 'Catalogación', description: 'Extrae información para catalogar documentos.', icon: 'database' },
    ],
    faq: [
      { question: '¿Qué metadatos se muestran?', answer: 'Título, autor, asunto, palabras clave, fechas de creación y modificación, productor, etc.' },
      { question: '¿Puedo editar los metadatos?', answer: 'Usa la herramienta Editar Metadatos para modificarlos.' },
      { question: '¿Se modifica el PDF?', answer: 'No, solo se visualiza la información.' },
    ],
  },

  'edit-metadata': {
    title: 'Editar Metadatos',
    metaDescription: 'Edita los metadatos y propiedades de documentos PDF.',
    keywords: ['editar metadatos pdf', 'modificar propiedades', 'cambiar autor pdf'],
    description: '<p>Editar Metadatos te permite modificar las propiedades de tu documento PDF como título, autor y palabras clave.</p><p>Procesamiento local.</p>',
    howToUse: [
      { step: 1, title: 'Sube tu PDF', description: 'Arrastra y suelta el documento.' },
      { step: 2, title: 'Edita Metadatos', description: 'Modifica título, autor, asunto, palabras clave.' },
      { step: 3, title: 'Guarda y Descarga', description: 'Aplica los cambios y descarga.' },
    ],
    useCases: [
      { title: 'Branding', description: 'Añade información de empresa a documentos.', icon: 'building' },
      { title: 'SEO', description: 'Optimiza metadatos para búsqueda.', icon: 'search' },
      { title: 'Organización', description: 'Añade palabras clave para catalogación.', icon: 'tag' },
    ],
    faq: [
      { question: '¿Qué metadatos puedo editar?', answer: 'Título, autor, asunto, palabras clave, productor y más.' },
      { question: '¿Puedo eliminar metadatos?', answer: 'Sí, deja campos vacíos o usa Eliminar Metadatos.' },
      { question: '¿Afecta el contenido?', answer: 'No, solo modifica las propiedades del documento.' },
    ],
  },

  'pdf-to-zip': {
    title: 'PDFs a ZIP',
    metaDescription: 'Empaqueta múltiples archivos PDF en un archivo ZIP.',
    keywords: ['pdf a zip', 'comprimir pdfs', 'empaquetar pdf'],
    description: '<p>PDFs a ZIP empaqueta múltiples archivos PDF en un único archivo ZIP comprimido.</p><p>Procesamiento local.</p>',
    howToUse: [
      { step: 1, title: 'Sube PDFs', description: 'Arrastra y suelta múltiples archivos PDF.' },
      { step: 2, title: 'Configura Opciones', description: 'Selecciona nivel de compresión.' },
      { step: 3, title: 'Crea y Descarga', description: 'Genera el archivo ZIP y descarga.' },
    ],
    useCases: [
      { title: 'Envío por Correo', description: 'Empaqueta múltiples PDFs para enviar por email.', icon: 'mail' },
      { title: 'Archivos', description: 'Comprime documentos para almacenamiento.', icon: 'archive' },
      { title: 'Distribución', description: 'Prepara paquetes de documentos para distribución.', icon: 'package' },
    ],
    faq: [
      { question: '¿Cuántos PDFs puedo empaquetar?', answer: 'Hasta 100 archivos PDF.' },
      { question: '¿Se comprimen los PDFs?', answer: 'El ZIP comprime el paquete, no los PDFs individuales.' },
      { question: '¿Puedo añadir otros archivos?', answer: 'Esta herramienta es específica para PDFs.' },
    ],
  },

  'compare-pdfs': {
    title: 'Comparar PDFs',
    metaDescription: 'Compara dos documentos PDF lado a lado y resalta diferencias.',
    keywords: ['comparar pdf', 'diferencias pdf', 'comparación documentos'],
    description: '<p>Comparar PDFs muestra dos documentos lado a lado y resalta las diferencias entre ellos.</p><p>Procesamiento local.</p>',
    howToUse: [
      { step: 1, title: 'Sube Dos PDFs', description: 'Arrastra y suelta los dos documentos a comparar.' },
      { step: 2, title: 'Revisa Diferencias', description: 'Ve las diferencias resaltadas.' },
      { step: 3, title: 'Exporta Resultados', description: 'Descarga el informe de comparación.' },
    ],
    useCases: [
      { title: 'Control de Versiones', description: 'Compara diferentes versiones de documentos.', icon: 'git-compare' },
      { title: 'Revisión de Contratos', description: 'Identifica cambios en contratos.', icon: 'file-signature' },
      { title: 'Auditoría', description: 'Verifica cambios en documentos oficiales.', icon: 'search' },
    ],
    faq: [
      { question: '¿Qué diferencias detecta?', answer: 'Cambios en texto, imágenes, formato y estructura.' },
      { question: '¿Funciona con PDFs escaneados?', answer: 'Mejor con PDFs de texto. Para escaneados, usa OCR primero.' },
      { question: '¿Puedo comparar más de dos PDFs?', answer: 'Esta herramienta compara dos PDFs a la vez.' },
    ],
  },

  'posterize-pdf': {
    title: 'Convertir PDF a Poster para Imprimir en A4 Gratis',
    metaDescription: 'Convierte y divide un PDF en múltiples hojas A4 para imprimir posters gigantes en impresoras normales. Con marcas de corte. 100% gratis, privado y sin registro.',
    keywords: [
      'convertir pdf a poster para imprimir',
      'pdf a poster',
      'convertir pdf en poster',
      'imprimir pdf en poster',
      'posterizar pdf',
      'imprimir poster en hojas a4',
      'de pdf a poster',
      'dividir pdf para imprimir en varias hojas',
      'poster pdf online gratis',
    ],
    description: '<p>Convierte y divide cualquier documento o imagen PDF de gran formato en una cuadrícula de múltiples hojas A4 o Carta listas para imprimir en impresoras domésticas o de oficina estándar.</p><p>Ideal para crear carteles gigantes, planos de ingeniería, mapas y pancartas sin necesidad de plotters profesionales. Puedes configurar el número de filas y columnas, añadir marcas de corte y definir márgenes de solapamiento para un pegado perfecto.</p><p>Todo el procesamiento se realiza localmente en tu navegador: tus archivos nunca se suben a ningún servidor, garantizando privacidad total y velocidad inmediata.</p>',
    howToUse: [
      { step: 1, title: 'Sube tu PDF o imagen', description: 'Arrastra tu archivo o selecciónalo desde tu dispositivo. Sin límite de tamaño.' },
      { step: 2, title: 'Elige la cuadrícula de impresión', description: 'Selecciona cuántas hojas de ancho y alto deseas (ej. 2x2 para A2, 3x3 para A1) y activa las marcas de corte.' },
      { step: 3, title: 'Genera el PDF y descarga', description: 'Haz clic en Posterizar para descargar un archivo con todas las hojas A4 numeradas listas para imprimir.' },
    ],
    useCases: [
      { title: 'Posters gigantes e infografías', description: 'Imprime pósteres de alta calidad uniendo hojas A4 estándar en cualquier impresora.', icon: 'maximize' },
      { title: 'Planos y esquemas técnicos', description: 'Divide planos de gran formato (A0/A1) para revisarlos y montarlos en pared fácilmente.', icon: 'map' },
      { title: 'Pancartas y material educativo', description: 'Crea banners y carteles didácticos para eventos, ferias escolares o exposiciones.', icon: 'layout-grid' },
    ],
    faq: [
      { question: '¿Cómo imprimir un PDF en varias hojas para hacer un póster?', answer: 'Sube tu PDF, elige la cuadrícula (por ejemplo, 2x2 páginas) y descarga el archivo resultante. Luego imprime cada hoja en tu impresora habitual en escala 100% y únelas usando las marcas de corte.' },
      { question: '¿Qué es el margen de solapamiento (overlap)?', answer: 'Es una pequeña franja duplicada en los bordes de cada página que facilita pegar las hojas con precisión sin dejar huecos ni desalinear el diseño.' },
      { question: '¿Puedo imprimir en impresoras comunes A4 o Carta?', answer: 'Sí, la herramienta está diseñada exactamente para que impresoras estándar puedan imprimir pósteres de cualquier tamaño.' },
      { question: '¿Es seguro este servicio? ¿Se suben mis archivos?', answer: 'Completamente seguro. Todo el cálculo se realiza dentro de tu navegador web mediante WebAssembly y JavaScript local. Tus documentos nunca salen de tu ordenador.' },
    ],
  },


  // ==================== OPTIMIZAR Y REPARAR ====================
  'fix-page-size': {
    title: 'Corregir Tamaño de Página',
    metaDescription: 'Estandariza el tamaño de página de documentos PDF.',
    keywords: ['corregir tamaño pdf', 'estandarizar páginas', 'tamaño página pdf'],
    description: '<p>Corregir Tamaño de Página estandariza todas las páginas de tu PDF a un tamaño uniforme.</p><p>Procesamiento local.</p>',
    howToUse: [
      { step: 1, title: 'Sube tu PDF', description: 'Arrastra y suelta el documento.' },
      { step: 2, title: 'Selecciona Tamaño', description: 'Elige el tamaño de página deseado (A4, Letter, etc.).' },
      { step: 3, title: 'Aplica y Descarga', description: 'Estandariza las páginas y descarga.' },
    ],
    useCases: [
      { title: 'Impresión', description: 'Prepara documentos para impresión uniforme.', icon: 'printer' },
      { title: 'Combinación', description: 'Estandariza antes de combinar documentos.', icon: 'combine' },
      { title: 'Presentación', description: 'Unifica tamaños para presentaciones profesionales.', icon: 'presentation' },
    ],
    faq: [
      { question: '¿Qué tamaños están disponibles?', answer: 'A4, Letter, Legal, A3, A5 y tamaños personalizados.' },
      { question: '¿Se escala el contenido?', answer: 'Puedes elegir escalar, recortar o añadir márgenes.' },
      { question: '¿Afecta la calidad?', answer: 'El contenido mantiene su calidad original.' },
    ],
  },

  'linearize-pdf': {
    title: 'Linearizar PDF',
    metaDescription: 'Optimiza PDFs para visualización web rápida (Fast Web View).',
    keywords: ['linearizar pdf', 'fast web view', 'optimizar pdf web'],
    description: '<p>Linearizar PDF optimiza documentos para visualización web rápida, permitiendo ver la primera página mientras se descarga el resto.</p><p>Procesamiento local.</p>',
    howToUse: [
      { step: 1, title: 'Sube tu PDF', description: 'Arrastra y suelta el documento.' },
      { step: 2, title: 'Confirma', description: 'Revisa las opciones de linearización.' },
      { step: 3, title: 'Lineariza y Descarga', description: 'Optimiza el PDF y descarga.' },
    ],
    useCases: [
      { title: 'Publicación Web', description: 'Optimiza PDFs para sitios web.', icon: 'globe' },
      { title: 'Documentos Grandes', description: 'Mejora la experiencia con PDFs grandes.', icon: 'file-text' },
      { title: 'Distribución', description: 'Prepara documentos para distribución en línea.', icon: 'share-2' },
    ],
    faq: [
      { question: '¿Qué es linearización?', answer: 'Reorganiza el PDF para que la primera página se muestre inmediatamente.' },
      { question: '¿Reduce el tamaño?', answer: 'No significativamente, pero mejora la velocidad de visualización.' },
      { question: '¿Afecta la compatibilidad?', answer: 'No, los PDFs linearizados son compatibles con todos los lectores.' },
    ],
  },

  'page-dimensions': {
    title: 'Dimensiones de Página',
    metaDescription: 'Analiza y muestra las dimensiones de cada página en documentos PDF.',
    keywords: ['dimensiones pdf', 'tamaño páginas', 'medidas pdf'],
    description: '<p>Dimensiones de Página analiza y muestra el tamaño de cada página en tu documento PDF.</p><p>Procesamiento local.</p>',
    howToUse: [
      { step: 1, title: 'Sube tu PDF', description: 'Arrastra y suelta el documento.' },
      { step: 2, title: 'Revisa Dimensiones', description: 'Ve el tamaño de cada página.' },
      { step: 3, title: 'Exporta si Necesitas', description: 'Exporta el informe de dimensiones.' },
    ],
    useCases: [
      { title: 'Verificación', description: 'Verifica tamaños antes de imprimir.', icon: 'ruler' },
      { title: 'Análisis', description: 'Analiza documentos con páginas mixtas.', icon: 'search' },
      { title: 'Preparación', description: 'Identifica páginas que necesitan ajuste.', icon: 'settings' },
    ],
    faq: [
      { question: '¿Qué unidades se muestran?', answer: 'Milímetros, pulgadas y puntos.' },
      { question: '¿Detecta orientación?', answer: 'Sí, muestra si cada página es vertical u horizontal.' },
      { question: '¿Puedo cambiar las dimensiones?', answer: 'Usa Corregir Tamaño de Página para modificar dimensiones.' },
    ],
  },

  'remove-restrictions': {
    title: 'Eliminar Restricciones',
    metaDescription: 'Elimina restricciones de seguridad de documentos PDF.',
    keywords: ['eliminar restricciones pdf', 'desbloquear pdf', 'quitar seguridad'],
    description: '<p>Eliminar Restricciones quita las restricciones de seguridad de PDFs que impiden copiar, imprimir o editar.</p><p>Procesamiento local.</p>',
    howToUse: [
      { step: 1, title: 'Sube tu PDF', description: 'Arrastra y suelta el documento restringido.' },
      { step: 2, title: 'Ingresa Contraseña', description: 'Si es necesario, ingresa la contraseña del propietario.' },
      { step: 3, title: 'Elimina y Descarga', description: 'Quita las restricciones y descarga.' },
    ],
    useCases: [
      { title: 'Imprimir Documentos', description: 'Habilita impresión en PDFs restringidos.', icon: 'printer' },
      { title: 'Copiar Texto', description: 'Permite copiar texto de documentos bloqueados.', icon: 'copy' },
      { title: 'Editar PDFs', description: 'Habilita edición en documentos protegidos.', icon: 'edit' },
    ],
    faq: [
      { question: '¿Necesito la contraseña?', answer: 'Depende del tipo de protección. Algunas restricciones requieren contraseña.' },
      { question: '¿Es legal?', answer: 'Solo usa esta herramienta con documentos que tienes derecho a modificar.' },
      { question: '¿Funciona con todos los PDFs?', answer: 'Funciona con la mayoría de PDFs con restricciones estándar.' },
    ],
  },

  'repair-pdf': {
    title: 'Reparar PDF',
    metaDescription: 'Repara archivos PDF dañados o corruptos.',
    keywords: ['reparar pdf', 'arreglar pdf', 'pdf corrupto', 'recuperar pdf'],
    description: '<p>Reparar PDF intenta recuperar y reparar archivos PDF dañados o corruptos.</p><p>Procesamiento local.</p>',
    howToUse: [
      { step: 1, title: 'Sube tu PDF', description: 'Arrastra y suelta el archivo dañado.' },
      { step: 2, title: 'Inicia Reparación', description: 'La herramienta analiza y repara el archivo.' },
      { step: 3, title: 'Descarga Reparado', description: 'Descarga el PDF reparado.' },
    ],
    useCases: [
      { title: 'Archivos Corruptos', description: 'Recupera PDFs que no se abren correctamente.', icon: 'wrench' },
      { title: 'Descargas Incompletas', description: 'Repara PDFs de descargas interrumpidas.', icon: 'download' },
      { title: 'Archivos Antiguos', description: 'Recupera documentos de archivos dañados.', icon: 'archive' },
    ],
    faq: [
      { question: '¿Qué problemas puede reparar?', answer: 'Estructura dañada, referencias rotas, objetos corruptos.' },
      { question: '¿Siempre funciona?', answer: 'Depende del nivel de daño. Archivos muy dañados pueden no ser recuperables.' },
      { question: '¿Se pierde contenido?', answer: 'La herramienta intenta preservar todo el contenido posible.' },
    ],
  },

  // ==================== SEGURIDAD PDF ====================
  'encrypt-pdf': {
    title: 'Cifrar PDF',
    metaDescription: 'Protege documentos PDF con contraseña y cifrado.',
    keywords: ['cifrar pdf', 'proteger pdf', 'contraseña pdf', 'seguridad pdf'],
    description: '<p>Cifrar PDF protege tus documentos con contraseña y cifrado AES para máxima seguridad.</p><p>Procesamiento local.</p>',
    howToUse: [
      { step: 1, title: 'Sube tu PDF', description: 'Arrastra y suelta el documento.' },
      { step: 2, title: 'Configura Seguridad', description: 'Establece contraseña y permisos.' },
      { step: 3, title: 'Cifra y Descarga', description: 'Aplica el cifrado y descarga.' },
    ],
    useCases: [
      { title: 'Documentos Confidenciales', description: 'Protege información sensible.', icon: 'lock' },
      { title: 'Envío Seguro', description: 'Cifra documentos antes de enviar por email.', icon: 'mail' },
      { title: 'Cumplimiento', description: 'Cumple con requisitos de seguridad de datos.', icon: 'shield' },
    ],
    faq: [
      { question: '¿Qué cifrado se usa?', answer: 'AES de 128 o 256 bits, el estándar de la industria.' },
      { question: '¿Puedo establecer permisos?', answer: 'Sí, controla impresión, copia, edición y más.' },
      { question: '¿Qué pasa si olvido la contraseña?', answer: 'No hay forma de recuperar PDFs cifrados sin la contraseña.' },
    ],
  },

  'sanitize-pdf': {
    title: 'Sanitizar PDF',
    metaDescription: 'Elimina información oculta y metadatos de documentos PDF.',
    keywords: ['sanitizar pdf', 'limpiar pdf', 'eliminar información oculta'],
    description: '<p>Sanitizar PDF elimina toda la información oculta, metadatos, scripts y datos sensibles de tus documentos.</p><p>Procesamiento local.</p>',
    howToUse: [
      { step: 1, title: 'Sube tu PDF', description: 'Arrastra y suelta el documento.' },
      { step: 2, title: 'Selecciona Opciones', description: 'Elige qué elementos eliminar.' },
      { step: 3, title: 'Sanitiza y Descarga', description: 'Limpia el PDF y descarga.' },
    ],
    useCases: [
      { title: 'Privacidad', description: 'Elimina información personal antes de compartir.', icon: 'shield' },
      { title: 'Seguridad', description: 'Quita scripts y elementos potencialmente peligrosos.', icon: 'alert-triangle' },
      { title: 'Publicación', description: 'Prepara documentos para publicación pública.', icon: 'globe' },
    ],
    faq: [
      { question: '¿Qué se elimina?', answer: 'Metadatos, comentarios, adjuntos, scripts, capas ocultas y más.' },
      { question: '¿Afecta el contenido visible?', answer: 'No, solo elimina información oculta.' },
      { question: '¿Es reversible?', answer: 'No, guarda una copia del original.' },
    ],
  },

  'decrypt-pdf': {
    title: 'Descifrar PDF',
    metaDescription: 'Elimina la protección con contraseña de documentos PDF.',
    keywords: ['descifrar pdf', 'quitar contraseña', 'desbloquear pdf'],
    description: '<p>Descifrar PDF elimina la protección con contraseña de documentos PDF cifrados.</p><p>Procesamiento local.</p>',
    howToUse: [
      { step: 1, title: 'Sube tu PDF', description: 'Arrastra y suelta el documento cifrado.' },
      { step: 2, title: 'Ingresa Contraseña', description: 'Ingresa la contraseña del documento.' },
      { step: 3, title: 'Descifra y Descarga', description: 'Elimina el cifrado y descarga.' },
    ],
    useCases: [
      { title: 'Acceso a Documentos', description: 'Desbloquea PDFs para los que tienes la contraseña.', icon: 'unlock' },
      { title: 'Archivos', description: 'Elimina cifrado de documentos archivados.', icon: 'archive' },
      { title: 'Procesamiento', description: 'Prepara PDFs cifrados para otras operaciones.', icon: 'settings' },
    ],
    faq: [
      { question: '¿Necesito la contraseña?', answer: 'Sí, necesitas la contraseña correcta para descifrar.' },
      { question: '¿Puedo descifrar sin contraseña?', answer: 'No, esta herramienta requiere la contraseña legítima.' },
      { question: '¿Se elimina toda la protección?', answer: 'Sí, el PDF resultante no tiene cifrado ni restricciones.' },
    ],
  },

  'flatten-pdf': {
    title: 'Aplanar PDF',
    metaDescription: 'Aplana formularios y anotaciones en documentos PDF.',
    keywords: ['aplanar pdf', 'flatten pdf', 'formularios pdf'],
    description: '<p>Aplanar PDF convierte formularios interactivos y anotaciones en contenido estático no editable.</p><p>Procesamiento local.</p>',
    howToUse: [
      { step: 1, title: 'Sube tu PDF', description: 'Arrastra y suelta el documento.' },
      { step: 2, title: 'Selecciona Opciones', description: 'Elige qué elementos aplanar.' },
      { step: 3, title: 'Aplana y Descarga', description: 'Convierte a estático y descarga.' },
    ],
    useCases: [
      { title: 'Formularios Completados', description: 'Convierte formularios rellenados en documentos finales.', icon: 'file-check' },
      { title: 'Archivos', description: 'Crea versiones permanentes de documentos anotados.', icon: 'archive' },
      { title: 'Distribución', description: 'Prepara documentos para distribución sin edición.', icon: 'share-2' },
    ],
    faq: [
      { question: '¿Qué se aplana?', answer: 'Campos de formulario, anotaciones, comentarios y capas.' },
      { question: '¿Es reversible?', answer: 'No, guarda una copia del original con elementos editables.' },
      { question: '¿Afecta la apariencia?', answer: 'No, el documento se ve igual pero los elementos son estáticos.' },
    ],
  },

  'remove-metadata': {
    title: 'Eliminar Metadatos',
    metaDescription: 'Elimina todos los metadatos de documentos PDF.',
    keywords: ['eliminar metadatos pdf', 'quitar propiedades', 'limpiar metadatos'],
    description: '<p>Eliminar Metadatos quita toda la información de propiedades de tus documentos PDF para proteger la privacidad.</p><p>Procesamiento local.</p>',
    howToUse: [
      { step: 1, title: 'Sube tu PDF', description: 'Arrastra y suelta el documento.' },
      { step: 2, title: 'Confirma', description: 'Revisa los metadatos a eliminar.' },
      { step: 3, title: 'Elimina y Descarga', description: 'Quita los metadatos y descarga.' },
    ],
    useCases: [
      { title: 'Privacidad', description: 'Elimina información de autor y fechas.', icon: 'shield' },
      { title: 'Anonimización', description: 'Prepara documentos para compartir anónimamente.', icon: 'user-x' },
      { title: 'Publicación', description: 'Limpia metadatos antes de publicar.', icon: 'globe' },
    ],
    faq: [
      { question: '¿Qué metadatos se eliminan?', answer: 'Autor, título, asunto, palabras clave, fechas, productor, etc.' },
      { question: '¿Afecta el contenido?', answer: 'No, solo elimina las propiedades del documento.' },
      { question: '¿Es reversible?', answer: 'No, guarda una copia si necesitas los metadatos.' },
    ],
  },

  'change-permissions': {
    title: 'Cambiar Permisos',
    metaDescription: 'Modifica los permisos de seguridad de documentos PDF.',
    keywords: ['permisos pdf', 'cambiar permisos', 'seguridad pdf'],
    description: '<p>Cambiar Permisos te permite modificar qué acciones están permitidas en tu documento PDF.</p><p>Procesamiento local.</p>',
    howToUse: [
      { step: 1, title: 'Sube tu PDF', description: 'Arrastra y suelta el documento.' },
      { step: 2, title: 'Configura Permisos', description: 'Selecciona qué acciones permitir o restringir.' },
      { step: 3, title: 'Aplica y Descarga', description: 'Guarda los nuevos permisos y descarga.' },
    ],
    useCases: [
      { title: 'Proteger Contenido', description: 'Restringe copia y edición de documentos.', icon: 'lock' },
      { title: 'Control de Impresión', description: 'Limita o permite impresión.', icon: 'printer' },
      { title: 'Distribución', description: 'Configura permisos para distribución controlada.', icon: 'share-2' },
    ],
    faq: [
      { question: '¿Qué permisos puedo cambiar?', answer: 'Impresión, copia, edición, anotaciones, extracción de páginas.' },
      { question: '¿Necesito contraseña?', answer: 'Puedes establecer una contraseña de propietario para proteger los permisos.' },
      { question: '¿Son los permisos seguros?', answer: 'Los permisos pueden ser eludidos con herramientas especializadas.' },
    ],
  },

  'pdf-to-pptx': {
    title: 'PDF a PowerPoint',
    metaDescription: 'Convierte PDF a presentación PowerPoint (PPTX). Cada página se convierte en una diapositiva.',
    keywords: ['pdf a pptx', 'pdf a powerpoint', 'convertir pdf ppt', 'pdf diapositiva'],
    description: `
      <p>PDF a PowerPoint convierte tus documentos PDF en presentaciones de PowerPoint (PPTX) editables. Cada página del PDF se transforma en una diapositiva de alta calidad, preservando el diseño visual.</p>
      <p>Ideal para convertir informes o documentos en formato de presentación.</p>
    `,
    howToUse: [
      { step: 1, title: 'Sube tu PDF', description: 'Arrastra y suelta o selecciona el documento.' },
      { step: 2, title: 'Configura Calidad', description: 'Selecciona la calidad de imagen (DPI) de las diapositivas.' },
      { step: 3, title: 'Convierte y Descarga', description: 'Crea tu presentación PPTX y descarga.' },
    ],
    useCases: [
      { title: 'Crear Presentaciones', description: 'Convierte informes PDF en diapositivas para reuniones.', icon: 'presentation' },
      { title: 'Material de Formación', description: 'Transforma manuales PDF en presentaciones interactivas.', icon: 'book-open' },
      { title: 'Reutilizar Contenido', description: 'Usa contenido PDF existente en nuevas presentaciones.', icon: 'refresh-cw' },
    ],
    faq: [
      { question: '¿Son editables las diapositivas?', answer: 'Cada diapositiva contiene una imagen de la página. Puedes añadir elementos encima.' },
      { question: '¿Qué DPI debo usar?', answer: '150 DPI para pantalla, 300 DPI para impresión.' },
      { question: '¿Funciona con múltiples páginas?', answer: 'Sí, cada página se convierte en una diapositiva separada.' },
    ],
  },

  'pdf-to-excel': {
    title: 'PDF a Excel',
    metaDescription: 'Convierte PDF a hoja de cálculo Excel. Extrae tablas a formato XLSX.',
    keywords: ['pdf a excel', 'pdf a xlsx', 'extraer tablas', 'datos pdf'],
    description: `
      <p>PDF a Excel convierte tus documentos PDF en hojas de cálculo Microsoft Excel (XLSX) editables. La herramienta detecta automáticamente las tablas en tu PDF y las extrae en hojas separadas.</p>
      <p>Ideal para analizar informes financieros, facturas o cualquier dato tabular.</p>
    `,
    howToUse: [
      { step: 1, title: 'Sube tu PDF', description: 'Sube el archivo PDF con tablas.' },
      { step: 2, title: 'Procesar', description: 'La herramienta identifica y extrae tablas automáticamente.' },
      { step: 3, title: 'Descarga Excel', description: 'Descarga el archivo Excel con los datos extraídos.' },
    ],
    useCases: [
      { title: 'Análisis Financiero', description: 'Convierte estados de cuenta o facturas a Excel.', icon: 'trending-up' },
      { title: 'Extracción de Datos', description: 'Saca tablas de informes de investigación.', icon: 'database' },
      { title: 'Gestión de Inventario', description: 'Convierte listas de inventario de PDF a hoja de cálculo.', icon: 'clipboard' },
    ],
    faq: [
      { question: '¿Cómo maneja las tablas?', answer: 'Las tablas detectadas se extraen a hojas correspondientes en el Excel.' },
      { question: '¿Si no hay tablas?', answer: 'Se crea una hoja de información indicando que no se encontraron tablas.' },
      { question: '¿Se preserva el formato?', answer: 'Los datos se preservan, pero el formato visual complejo puede simplificarse.' },
    ],
  },
  'pdf-booklet': {
    title: 'Crear Folleto PDF | Convertir PDF a Formato Libro para Imprimir',
    metaDescription: 'Crea folletos PDF para imprimir y plegar. Reorganiza páginas automáticamente en formato libro. 100% gratis, sin marcas de agua, listo para imprimir. Crear folleto →',
    keywords: ['folleto pdf', 'crear folleto pdf', 'pdf libro', 'pdf para imprimir folleto', 'pdf booklet', 'imprimir folleto', 'pdf formato libro', 'folleto doble cara'],
    description: `
      <p>PDF Booklet Creator organiza las páginas de tu PDF en formato folleto listo para imprimir, plegar y grapar. Perfecto para catálogos, revistas, programas de eventos y publicaciones.</p>
      <p>Organización automática de páginas en modo folleto para encuadernación rápida sin programas complicados.</p>
      <p>Todo el procesamiento se realiza localmente en tu navegador para proteger tu privacidad.</p>
    `,
    howToUse: [
      { step: 1, title: 'Sube tu PDF', description: 'Arrastra y suelta el documento que deseas convertir en folleto.' },
      { step: 2, title: 'Configura el diseño', description: 'Selecciona el tamaño de papel y las opciones de orientación.' },
      { step: 3, title: 'Crea y descarga', description: 'Genera el PDF listo para imprimir en modo libro.' },
    ],
    useCases: [
      { title: 'Catálogos y folletos', description: 'Convierte informes o folletos en documentos plegables.', icon: 'book-open' },
      { title: 'Revistas y zines', description: 'Publica zines con orden de página automático.', icon: 'book' },
      { title: 'Programas de eventos', description: 'Crea cuadernillos profesionales para conferencias o bodas.', icon: 'calendar' },
    ],
    faq: [
      { question: '¿Qué es el modo folleto (booklet)?', answer: 'Es el diseño donde las páginas se ordenan e imprimen para que al doblar por la mitad queden como un libro encuadernado.' },
      { question: '¿Es gratuito?', answer: 'Sí, 100% gratuito sin límites ni marcas de agua.' },
      { question: '¿Mis archivos están seguros?', answer: 'Totalmente. El procesamiento se realiza 100% en tu navegador y tus documentos nunca se suben a ningún servidor.' },
    ],
  },

  // ==================== NUEVAS HERRAMIENTAS Y CONVERSIONES ====================
  'word-to-pdf': {
    title: 'Convertir Word a PDF Online Gratis - DOCX y DOC a PDF',
    metaDescription: 'Convierte documentos Word (DOCX y DOC) a PDF manteniendo el diseño, fuentes e imágenes originales. 100% gratis, sin registro y seguro en tu navegador.',
    keywords: [
      'word a pdf',
      'convertir word a pdf',
      'doc a pdf',
      'docx a pdf gratis',
      'pasar de word a pdf',
      'convertir documento word a pdf',
      'word to pdf online',
    ],
    description: `
      <p>Convierte documentos de Microsoft Word (.docx y .doc) a formato PDF de forma rápida y sencilla. Esta herramienta preserva con precisión las fuentes, espaciados, tablas, estilos e imágenes de tu documento original.</p>
      <p>Ideal para enviar currículums (CV), contratos legales, cartas formales y trabajos académicos con un diseño inalterable y profesional en cualquier dispositivo.</p>
      <p>El procesamiento se realiza en tu navegador: tus documentos confidenciales y personales nunca se almacenan en servidores externos.</p>
    `,
    howToUse: [
      { step: 1, title: 'Sube tu documento Word', description: 'Arrastra y suelta tu archivo .docx o .doc, o elígelo desde tu ordenador o móvil.' },
      { step: 2, title: 'Conversión automática', description: 'El conversor procesa la maquetación y genera el PDF en segundos.' },
      { step: 3, title: 'Descarga tu PDF', description: 'Guarda tu nuevo archivo PDF listo para compartir, imprimir o enviar.' },
    ],
    useCases: [
      { title: 'Currículums y candidaturas', description: 'Convierte tu CV en Word a PDF para que no se desconfigure al abrirlo en Recursos Humanos.', icon: 'user' },
      { title: 'Contratos y propuestas', description: 'Genera versiones finales no editables de propuestas comerciales y contratos.', icon: 'file-text' },
      { title: 'Informes y trabajos académicos', description: 'Fija el formato de informes escolares o universitarios antes de su entrega.', icon: 'graduation-cap' },
    ],
    faq: [
      { question: '¿Cómo convertir un archivo Word a PDF gratis?', answer: 'Solo tienes que arrastrar tu archivo DOCX a la herramienta. En unos segundos se generará el PDF exacto para descargar sin coste ni límites.' },
      { question: '¿Se mantiene el formato original de Word?', answer: 'Sí, los textos, imágenes, encabezados, tablas y saltos de página se preservan de manera fiel al documento original.' },
      { question: '¿Es compatible con archivos DOC antiguos?', answer: 'Sí, soporta tanto el formato moderno .docx como el estándar tradicional .doc.' },
      { question: '¿Es seguro para contratos privados?', answer: 'Completamente. La conversión se procesa en tu propio navegador sin enviar datos a la nube.' },
    ],
  },

  'excel-to-pdf': {
    title: 'Convertir Excel a PDF Online Gratis - XLSX y XLS a PDF',
    metaDescription: 'Convierte hojas de cálculo de Excel a PDF con ajuste de página y tablas ordenadas. 100% gratis, privado y sin subir archivos al servidor.',
    keywords: [
      'excel a pdf',
      'convertir excel a pdf',
      'xlsx a pdf',
      'pasar excel a pdf',
      'convertir hoja de calculo a pdf gratis',
      'excel a pdf ajustar a pagina',
    ],
    description: `
      <p>Convierte tus hojas de cálculo de Excel (.xlsx y .xls) a documentos PDF listos para imprimir y compartir. Olvídate de tablas cortadas o columnas desalineadas.</p>
      <p>Permite visualizar balances contables, inventarios, facturas y reportes financieros en un formato estándar legible en cualquier pantalla o móvil sin requerir tener instalado Excel.</p>
      <p>Tus datos financieros y empresariales están 100% protegidos, ya que la conversión se realiza de forma local.</p>
    `,
    howToUse: [
      { step: 1, title: 'Sube tu archivo Excel', description: 'Arrastra tu hoja de cálculo (.xlsx o .xls) al recuadro.' },
      { step: 2, title: 'Ajuste de contenido', description: 'El sistema organiza las celdas, cuadrículas y columnas automáticamente.' },
      { step: 3, title: 'Descarga tu documento PDF', description: 'Obtén tu reporte en PDF con un formato limpio y profesional.' },
    ],
    useCases: [
      { title: 'Reportes financieros y balances', description: 'Envía cuentas de resultados y estados contables en formato seguro para auditoría.', icon: 'bar-chart' },
      { title: 'Facturas y presupuestos', description: 'Transforma presupuestos creados en Excel a documentos PDF limpios para clientes.', icon: 'receipt' },
      { title: 'Listas de precios e inventarios', description: 'Crea catálogos de precios para consulta rápida en dispositivos móviles.', icon: 'clipboard' },
    ],
    faq: [
      { question: '¿Se cortarán las columnas anchas al pasar a PDF?', answer: 'La herramienta optimiza el escalado para que las tablas encajen en el ancho de página estándar.' },
      { question: '¿Se convierten todas las hojas del libro?', answer: 'Sí, se procesan las hojas activas con datos para generar un documento completo.' },
      { question: '¿Se mantienen las fórmulas visibles?', answer: 'El PDF muestra el resultado visual y numérico exacto de los cálculos de tus celdas.' },
    ],
  },

  'pptx-to-pdf': {
    title: 'Convertir PowerPoint a PDF Online Gratis - PPTX y PPT a PDF',
    metaDescription: 'Convierte presentaciones PowerPoint (.pptx y .ppt) en documentos PDF de alta calidad. Perfecto para diapositivas, sin registro.',
    keywords: [
      'powerpoint a pdf',
      'pptx a pdf',
      'convertir presentaciones a pdf',
      'ppt a pdf gratis',
      'diapositivas a pdf',
    ],
    description: `
      <p>Convierte presentaciones de diapositivas de PowerPoint (.pptx y .ppt) en documentos PDF nítidos. Mantén el orden exacto de tus diapositivas, tipografías y gráficos vectoriales.</p>
      <p>Ideal para compartir presentaciones de reuniones, conferencias o clases con clientes y estudiantes sin temor a que las fuentes cambien o las imágenes se muevan.</p>
      <p>Procesamiento 100% privado en tu navegador, sin esperas ni registros.</p>
    `,
    howToUse: [
      { step: 1, title: 'Sube tu presentación', description: 'Arrastra tu archivo .pptx o .ppt al convertidor.' },
      { step: 2, title: 'Procesa las diapositivas', description: 'Las diapositivas se ordenan y ajustan a páginas individuales.' },
      { step: 3, title: 'Descarga el PDF', description: 'Guarda tu presentación lista para proyectar o imprimir.' },
    ],
    useCases: [
      { title: 'Ponencias y conferencias', description: 'Distribuye el material de tu charla en PDF para que los asistentes puedan consultarlo.', icon: 'presentation' },
      { title: 'Material didáctico para alumnos', description: 'Convierte tus clases en apuntes PDF fáciles de leer y subrayar.', icon: 'book-open' },
      { title: 'Pitches comerciales', description: 'Envía presentaciones de ventas a inversores y prospectos en formato profesional.', icon: 'briefcase' },
    ],
    faq: [
      { question: '¿Se mantiene la resolución de las fotos en las diapositivas?', answer: 'Sí, las imágenes mantienen su nitidez y calidad visual en el PDF exportado.' },
      { question: '¿Cada diapositiva se convierte en una página PDF?', answer: 'Sí, cada diapositiva de tu presentación corresponderá a una página en el PDF final.' },
    ],
  },

  'pdf-to-docx': {
    title: 'Convertir PDF a Word Editable Gratis - PDF a DOCX Online',
    metaDescription: 'Convierte archivos PDF a documentos Word (.docx) 100% editables. Conserva texto, tablas y párrafos sin marcas de agua ni registro.',
    keywords: [
      'pdf a word',
      'convertir pdf a word editable',
      'pdf a docx',
      'pasar pdf a word gratis',
      'editar pdf en word',
      'convertidor pdf a word',
    ],
    description: `
      <p>Convierte documentos PDF a archivos de Microsoft Word (.docx) completamente editables. Podrás modificar textos, corregir párrafos, actualizar fechas y reutilizar contenido sin tener que transcribir nada a mano.</p>
      <p>Excelente para contratos antiguos, currículums, reportes escaneados y actas de reuniones. El conversor analiza la maquetación y genera un archivo Word limpio y fácil de editar.</p>
      <p>Tus archivos están completamente seguros: todo se procesa en local sin subir tu información a la nube.</p>
    `,
    howToUse: [
      { step: 1, title: 'Sube tu archivo PDF', description: 'Arrastra el documento PDF que deseas transformar en Word.' },
      { step: 2, title: 'Conversión a DOCX', description: 'El algoritmo extrae el contenido, estilos y párrafos automáticamente.' },
      { step: 3, title: 'Descarga y edita en Word', description: 'Abre el archivo descargado en Microsoft Word o LibreOffice para editar libremente.' },
    ],
    useCases: [
      { title: 'Actualizar currículum antiguo', description: 'Modifica tu CV en PDF cuando has perdido el documento original de Word.', icon: 'user' },
      { title: 'Revisión y enmienda de contratos', description: 'Pasa contratos en PDF a Word para añadir cláusulas o realizar correcciones.', icon: 'file-text' },
      { title: 'Reutilización de tablas e informes', description: 'Extrae textos y estadísticas de PDFs para integrarlos en nuevos proyectos.', icon: 'copy' },
    ],
    faq: [
      { question: '¿El archivo Word resultante es realmente editable?', answer: 'Sí, obtendrás un archivo .docx nativo donde puedes modificar el texto, cambiar tipografías y reorganizar tablas.' },
      { question: '¿Se puede convertir un PDF escaneado?', answer: 'Para documentos escaneados que son imágenes puras se recomienda aplicar OCR para un reconocimiento óptimo de caracteres.' },
      { question: '¿Tiene algún límite de páginas o coste?', answer: 'No, es una herramienta gratuita y de uso ilimitado en PDFkoi.' },
    ],
  },

  'deskew-pdf': {
    title: 'Enderezar PDF Escaneado - Corregir Inclinación de Páginas Gratis',
    metaDescription: 'Corrige y endereza automáticamente páginas PDF escaneadas torcidas o inclinadas. Detección precisa de ángulo, 100% gratis en tu navegador.',
    keywords: [
      'enderezar pdf',
      'corregir inclinacion pdf',
      'deskew pdf',
      'alinear paginas escaneadas',
      'enderezar pdf torcido',
      'girar pdf torcido gratis',
    ],
    description: `
      <p>Endereza automáticamente páginas PDF que quedaron torcidas, chuecas o inclinadas al pasar por el escáner o el alimentador de papel (ADF).</p>
      <p>La herramienta detecta el ángulo exacto de desviación en cada página y la gira con precisión milimétrica para dejarla completamente horizontal y alineada.</p>
      <p>Indispensable para digitalización de libros, expedientes notariales, facturas y contratos antes de aplicar OCR o archivarlos.</p>
    `,
    howToUse: [
      { step: 1, title: 'Sube tu PDF torcido', description: 'Arrastra el PDF que contiene páginas inclinadas.' },
      { step: 2, title: 'Detección automática de ángulo', description: 'El sistema analiza el texto y las líneas para calcular la inclinación de cada hoja.' },
      { step: 3, title: 'Descarga tu PDF recto', description: 'Obtén tu documento perfectamente alineado y ordenado en segundos.' },
    ],
    useCases: [
      { title: 'Escaneos de oficina con ADF', description: 'Endereza lotes de documentos que entraron con ligera desviación en el escáner.', icon: 'scan' },
      { title: 'Fotos de documentos con móvil', description: 'Corrige la perspectiva y ángulo de recibos o papeles fotografiados.', icon: 'smartphone' },
      { title: 'Preparación para OCR', description: 'Alinea los textos para que los motores OCR reconozcan los caracteres con 100% de precisión.', icon: 'search' },
    ],
    faq: [
      { question: '¿Qué precisión tiene la detección de inclinación?', answer: 'Puede detectar y corregir desviaciones diminutas desde 0.1 grados hasta varios grados de inclinación.' },
      { question: '¿Se degrada la calidad del texto?', answer: 'No, la rotación preserva la nitidez y los píxeles originales del documento.' },
    ],
  },

  'extract-tables': {
    title: 'Extraer Tablas de PDF a Excel, CSV y Markdown Gratis',
    metaDescription: 'Detecta y extrae automáticamente tablas y datos de tus documentos PDF a CSV, Excel o Markdown. Sin registro, rápido y privado.',
    keywords: [
      'extraer tablas de pdf',
      'pdf a excel tablas',
      'extraer datos de pdf a csv',
      'convertir tablas pdf',
      'copiar tabla de pdf a excel',
    ],
    description: `
      <p>Detecta y extrae automáticamente tablas de datos estructurados contenidas en archivos PDF y expórtalas a CSV, Markdown o JSON para su análisis inmediato en Excel o bases de datos.</p>
      <p>Ahorra horas de trabajo manual evitando copiar y pegar fila por fila estados de cuentas, facturas o listas de precios.</p>
      <p>Toda la extracción ocurre dentro de tu navegador web sin transferir datos confidenciales por internet.</p>
    `,
    howToUse: [
      { step: 1, title: 'Sube tu archivo PDF', description: 'Arrastra el documento que contiene las tablas a extraer.' },
      { step: 2, title: 'Detección de estructuras', description: 'El analizador detecta cuadrículas, filas y columnas de datos.' },
      { step: 3, title: 'Exporta a tu formato favorito', description: 'Descarga en CSV, Excel, Markdown o copia los datos al portapapeles.' },
    ],
    useCases: [
      { title: 'Análisis de estados bancarios', description: 'Convierte extractos bancarios en tablas para conciliación financiera.', icon: 'bar-chart' },
      { title: 'Auditoría de inventarios y tarifas', description: 'Extrae listas de productos y precios para cruzarlas en hojas de cálculo.', icon: 'file-text' },
      { title: 'Artículos científicos y papers', description: 'Copia tablas de estudios para integrarlas en notas de Markdown.', icon: 'book' },
    ],
    faq: [
      { question: '¿Qué formatos de exportación están disponibles?', answer: 'Puedes descargar en CSV (compatible con Excel), formato Markdown o JSON para desarrolladores.' },
      { question: '¿Detecta tablas sin bordes visibles?', answer: 'Sí, el algoritmo analiza la alineación espacial de los textos para identificar columnas incluso sin líneas divisorias.' },
    ],
  },

  'pdf-to-pdfa': {
    title: 'Convertir PDF a PDF/A para Archivo a Largo Plazo (Norma ISO)',
    metaDescription: 'Convierte tus archivos PDF en documentos certificados PDF/A (PDF/A-1b, 2b). Ideal para administraciones públicas y conservación permanente.',
    keywords: [
      'pdf a pdfa',
      'convertir pdf a pdf/a',
      'pdf archivo a largo plazo',
      'iso 19005 pdf',
      'pdf administracion publica',
    ],
    description: `
      <p>Convierte documentos PDF al estándar internacional ISO PDF/A, diseñado específicamente para la preservación, archivo digital y almacenamiento legal a largo plazo.</p>
      <p>Incruesta todas las tipografías, metadatos estandarizados y elimina componentes dinámicos para garantizar que el archivo se vea exactamente igual dentro de 50 años.</p>
      <p>Obligatorio para la presentación de tesis, licitaciones públicas, juzgados y registros de la administración pública.</p>
    `,
    howToUse: [
      { step: 1, title: 'Sube tu documento PDF', description: 'Selecciona el PDF que necesitas certificar como archivo digital.' },
      { step: 2, title: 'Ajuste de conformidad PDF/A', description: 'El conversor incrusta fuentes y estandariza los perfiles de color.' },
      { step: 3, title: 'Descarga tu PDF/A', description: 'Guarda tu archivo listo para presentación oficial y archivo permanente.' },
    ],
    useCases: [
      { title: 'Expedientes judiciales y notariales', description: 'Cumple los requisitos legales de formato inalterable a largo plazo.', icon: 'scale' },
      { title: 'Trámites y registros públicos', description: 'Satisface las exigencias de la administración electrónica de gobiernos.', icon: 'landmark' },
      { title: 'Tesis universitarias', description: 'Entrega proyectos de fin de carrera y tesis en formato de archivo de biblioteca.', icon: 'graduation-cap' },
    ],
    faq: [
      { question: '¿Qué diferencia hay entre PDF y PDF/A?', answer: 'PDF/A es un subconjunto de PDF normal que prohíbe scripts externos y obliga a incrustar tipografías para que nunca se desconfigure con el paso de los años.' },
      { question: '¿Se puede abrir con cualquier lector de PDF?', answer: 'Sí, cualquier lector estándar como Adobe Acrobat o el navegador web puede abrirlo normalmente.' },
    ],
  },

  'rasterize-pdf': {
    title: 'Rasterizar PDF - Convertir Páginas PDF en Imágenes de Alta Calidad',
    metaDescription: 'Rasteriza páginas PDF convirtiéndolas en imágenes PNG, JPEG o WebP de alta resolución (300 DPI). Aplanado total, 100% gratis.',
    keywords: [
      'rasterizar pdf',
      'pdf a imagen alta resolucion',
      'aplanar vector a mapa de bits pdf',
      'pdf a png 300 dpi',
    ],
    description: `
      <p>Convierte y rasteriza las páginas de tu PDF en mapas de bits de alta resolución. Elimina capas vectoriales complejas para evitar problemas de fuentes al imprimir o visualizar.</p>
      <p>Permite configurar la resolución DPI (72 para pantalla, 150 para oficina, 300 para imprenta) y exportar en formatos PNG, JPEG o WebP de forma individual o comprimidos en ZIP.</p>
    `,
    howToUse: [
      { step: 1, title: 'Sube tu archivo PDF', description: 'Selecciona el documento que deseas rasterizar.' },
      { step: 2, title: 'Elige formato y resolución', description: 'Ajusta la calidad deseada en DPI y selecciona PNG, JPEG o WebP.' },
      { step: 3, title: 'Descarga tus imágenes', description: 'Guarda las imágenes rasterizadas listas para publicar o imprimir.' },
    ],
    useCases: [
      { title: 'Preparación para imprenta', description: 'Evita errores de separación de color y tipografías en artes finales.', icon: 'printer' },
      { title: 'Publicación en redes sociales', description: 'Genera diapositivas e imágenes listas para Instagram o LinkedIn.', icon: 'share-2' },
    ],
    faq: [
      { question: '¿Qué resolución DPI debo elegir?', answer: 'Usa 72 o 150 DPI para pantallas y sitios web; elige 300 DPI para impresiones de calidad comercial.' },
    ],
  },

  'markdown-to-pdf': {
    title: 'Convertir Markdown a PDF - Archivos .MD a PDF con Estilo',
    metaDescription: 'Convierte archivos Markdown (.md) a elegantes documentos PDF con soporte de código resaltado, tablas y temas visuales. Gratis.',
    keywords: [
      'markdown a pdf',
      'convertir md a pdf',
      'gfm a pdf',
      'notas markdown a pdf',
      'exportar markdown',
    ],
    description: `
      <p>Transforma tus notas técnicas, documentación o artículos en Markdown (.md) en documentos PDF con diseño tipográfico impecable.</p>
      <p>Compatible con la sintaxis GitHub Flavored Markdown (GFM), resaltado de sintaxis en bloques de código para más de 50 lenguajes, listas de tareas y tablas.</p>
    `,
    howToUse: [
      { step: 1, title: 'Sube tu archivo .md', description: 'Arrastra tu archivo Markdown o pega tu texto directamente.' },
      { step: 2, title: 'Elige el tema visual', description: 'Selecciona entre estilos claro, oscuro o estilo GitHub.' },
      { step: 3, title: 'Genera y descarga el PDF', description: 'Obtén tu documento perfectamente maquetado y numerado.' },
    ],
    useCases: [
      { title: 'Manuales y READMEs', description: 'Convierte documentación técnica de proyectos en manuales para clientes.', icon: 'file-text' },
      { title: 'Notas de estudio y artículos', description: 'Exporta tus apuntes de Obsidian o Notion en PDFs limpios para compartir.', icon: 'edit-3' },
    ],
    faq: [
      { question: '¿Se respetan las tablas y el código?', answer: 'Sí, las tablas se renderizan con cuadrículas limpias y el código incluye coloreado de sintaxis.' },
    ],
  },

  'email-to-pdf': {
    title: 'Convertir Email a PDF - Archivos .EML a Documentos PDF Gratis',
    metaDescription: 'Convierte archivos de correo electrónico (.eml) a formato PDF. Conserva encabezados, imágenes y lista de adjuntos de forma privada.',
    keywords: [
      'email a pdf',
      'eml a pdf',
      'convertir correo a pdf',
      'guardar email como pdf',
      'correo electronico a pdf',
    ],
    description: `
      <p>Convierte correos electrónicos guardados en formato .eml a archivos PDF estándar y permanentes. Preserva los datos clave: remitente, destinatario, fecha, asunto, formato HTML y registro de archivos adjuntos.</p>
      <p>La mejor solución para auditorías legales, juicios, control contable o archivo de acuerdos comerciales por correo.</p>
    `,
    howToUse: [
      { step: 1, title: 'Sube tu archivo .eml', description: 'Arrastra tu archivo de correo descargado de Outlook, Gmail o Thunderbird.' },
      { step: 2, title: 'Configura la salida', description: 'Elige el tamaño de página y si deseas incluir campos de copia (CC/CCO).' },
      { step: 3, title: 'Descarga tu PDF', description: 'Obtén una copia fiel y segura del correo electrónico.' },
    ],
    useCases: [
      { title: 'Pruebas judiciales y legales', description: 'Archiva correos con valor probatorio en formato no editable.', icon: 'scale' },
      { title: 'Justificantes de compras y acuerdos', description: 'Guarda confirmaciones de pedidos y acuerdos de clientes.', icon: 'briefcase' },
    ],
    faq: [
      { question: '¿Los archivos adjuntos se incluyen?', answer: 'El PDF incluye la lista completa de nombres de adjuntos para su verificación.' },
    ],
  },

  'cbz-to-pdf': {
    title: 'Convertir CBZ a PDF - Archivos de Cómics y Manga a PDF',
    metaDescription: 'Convierte cómics y mangas en formato CBZ a documentos PDF sin perder calidad ni orden de lectura. Gratis y seguro.',
    keywords: [
      'cbz a pdf',
      'comic a pdf',
      'convertir manga cbz a pdf',
      'lector cbz gratis',
    ],
    description: `
      <p>Convierte cómics digitales y mangas en formato Comic Book Archive (.cbz y .zip) a archivos PDF universales legibles en cualquier lector de libros electrónicos, Kindle o tablet.</p>
      <p>Extrae y ordena automáticamente las páginas respetando la secuencia de lectura y manteniendo la resolución de cada viñeta.</p>
    `,
    howToUse: [
      { step: 1, title: 'Sube tu cómic .cbz', description: 'Arrastra tu archivo CBZ o ZIP de imágenes.' },
      { step: 2, title: 'Ajuste de página', description: 'Selecciona las opciones de visualización y escala de imagen.' },
      { step: 3, title: 'Descarga el cómic en PDF', description: 'Disfruta de tu lectura en cualquier lector de PDF.' },
    ],
    useCases: [
      { title: 'Lectura en Kindle y e-Readers', description: 'Lee cómics en lectores electrónicos que solo admiten PDF.', icon: 'book' },
      { title: 'Colecciones digitales', description: 'Estandariza tu biblioteca gráfica en un formato común.', icon: 'archive' },
    ],
    faq: [
      { question: '¿Se comprimen las imágenes?', answer: 'No, las imágenes se integran en el PDF con su resolución y color originales.' },
    ],
  },

  'font-to-outline': {
    title: 'Convertir Fuentes a Curvas en PDF - Texto a Trazos Vectoriales',
    metaDescription: 'Convierte todas las fuentes de un PDF en trazados vectoriales (curvas). Evita problemas de fuentes al imprimir o enviar a imprenta.',
    keywords: [
      'fuentes a curvas pdf',
      'convertir texto a curvas pdf',
      'texto a contorno pdf',
      'font to outline pdf',
      'trazar tipografias pdf',
    ],
    description: `
      <p>Transforma todos los textos de tu documento PDF en trazos vectoriales (curvas o contornos). Garantiza que el documento se vea exactamente idéntico en cualquier ordenador o imprenta comercial, incluso si no tienen instaladas las fuentes tipográficas originales.</p>
      <p>Un paso indispensable antes de enviar archivos a litografía, imprenta digital o rotulación exterior.</p>
    `,
    howToUse: [
      { step: 1, title: 'Sube tu PDF con textos', description: 'Selecciona el documento cuyas fuentes deseas convertir a curvas.' },
      { step: 2, title: 'Procesamiento vectorial', description: 'El motor convierte cada glifo de texto en trayectorias vectoriales.' },
      { step: 3, title: 'Descarga tu PDF trazado', description: 'Guarda tu PDF listo para imprenta 100% blindado contra cambios de fuentes.' },
    ],
    useCases: [
      { title: 'Envío a imprentas comerciales', description: 'Cumple el requisito de artes finales con tipografía trazada.', icon: 'printer' },
      { title: 'Protección de licencias de fuentes', description: 'Evita problemas de distribución de tipografías comerciales protegidas.', icon: 'shield' },
    ],
    faq: [
      { question: '¿El texto seguirá siendo editable?', answer: 'No, al trazar el texto se convierte en dibujo vectorial y ya no se puede modificar como texto normal.' },
    ],
  },

  'epub-to-pdf': {
    title: 'Convertir EPUB a PDF Online Gratis - Libros Electrónicos a PDF',
    metaDescription: 'Convierte libros y novelas EPUB a PDF con paginación limpia, índices y márgenes optimizados para lectura e impresión. Gratis.',
    keywords: [
      'epub a pdf',
      'convertir epub a pdf',
      'libro electronico a pdf',
      'ebook a pdf gratis',
      'pasar epub a pdf',
    ],
    description: `
      <p>Convierte libros electrónicos en formato EPUB a documentos PDF fáciles de imprimir, anotar y leer en cualquier pantalla o dispositivo.</p>
      <p>Conserva la jerarquía de capítulos, imágenes incrustadas, saltos de página y tipografías legibles.</p>
    `,
    howToUse: [
      { step: 1, title: 'Sube tu libro .epub', description: 'Arrastra tu archivo EPUB al convertidor.' },
      { step: 2, title: 'Configura la paginación', description: 'Elige el tamaño de página deseado (A4, A5 o Carta).' },
      { step: 3, title: 'Descarga tu libro en PDF', description: 'Guarda tu PDF formateado y listo para leer.' },
    ],
    useCases: [
      { title: 'Impresión de libros electrónicos', description: 'Imprime novelas o manuales técnicos comprados en formato EPUB.', icon: 'printer' },
      { title: 'Anotar y subrayar', description: 'Subraya textos de estudio cómodamente en aplicaciones de PDF.', icon: 'edit-3' },
    ],
    faq: [
      { question: '¿Se mantiene el índice de capítulos?', answer: 'Sí, la estructura de capítulos se organiza en páginas correlativas.' },
    ],
  },

  'mobi-to-pdf': {
    title: 'Convertir MOBI a PDF - Libros Kindle a Documentos PDF Gratis',
    metaDescription: 'Convierte libros en formato MOBI, AZW y AZW3 a PDF en un clic. Lee tus libros Kindle en cualquier dispositivo sin restricciones.',
    keywords: [
      'mobi a pdf',
      'convertir mobi a pdf gratis',
      'azw a pdf',
      'kindle a pdf',
      'pasar mobi a pdf',
    ],
    description: `
      <p>Convierte archivos de libros Kindle (.mobi, .azw y .azw3) a formato PDF estándar. Desbloquea la posibilidad de leer tus libros en cualquier ordenador, tablet Android o iPhone.</p>
      <p>Todo el formateo de párrafos e ilustraciones se preserva de forma local y segura en tu navegador.</p>
    `,
    howToUse: [
      { step: 1, title: 'Sube tu archivo .mobi', description: 'Selecciona el libro electrónico de tu dispositivo.' },
      { step: 2, title: 'Procesamiento de texto', description: 'El conversor maqueta el libro en páginas numeradas.' },
      { step: 3, title: 'Descarga tu PDF', description: 'Obtén tu copia lista para abrir en cualquier lector de PDF.' },
    ],
    useCases: [
      { title: 'Lectura multiplataforma', description: 'Lee libros fuera del ecosistema cerrado de Amazon Kindle.', icon: 'smartphone' },
      { title: 'Estudio y citas académicas', description: 'Extrae pasajes y referencias de libros digitales fácilmente.', icon: 'book' },
    ],
    faq: [
      { question: '¿Soporta archivos protegidos con DRM?', answer: 'Solo se pueden convertir archivos sin sistemas de protección anticopia (DRM).' },
    ],
  },

  'djvu-to-pdf': {
    title: 'Convertir DJVU a PDF Online Gratis - Documentos DJVU a PDF',
    metaDescription: 'Convierte archivos y libros escaneados en formato DJVU a PDF de alta calidad. Rápido, sin límites y privado en tu navegador.',
    keywords: [
      'djvu a pdf',
      'convertir djvu a pdf gratis',
      'pasar djvu a pdf',
      'djvu a pdf online',
    ],
    description: `
      <p>Convierte archivos DJVU a PDF para abrirlos fácilmente en cualquier visor moderno sin necesidad de instalar lectores de DJVU especializados.</p>
      <p>El conversor procesa las capas de texto escaneadas e imágenes comprimidas, asegurando que tus libros antiguos y documentos técnicos sean legibles en cualquier lugar.</p>
    `,
    howToUse: [
      { step: 1, title: 'Sube tu archivo .djvu', description: 'Arrastra tu archivo DJVU a la ventana.' },
      { step: 2, title: 'Conversión de páginas', description: 'Se procesan todas las hojas escaneadas del documento.' },
      { step: 3, title: 'Descarga el PDF', description: 'Disfruta de tu archivo convertido en formato estándar.' },
    ],
    useCases: [
      { title: 'Libros científicos y de matemáticas', description: 'Accede a documentos académicos antiguos que solo estaban disponibles en DJVU.', icon: 'book' },
      { title: 'Archivos históricos y manuales', description: 'Convierte manuales técnicos para compartirlos con colegas.', icon: 'archive' },
    ],
    faq: [
      { question: '¿Por qué convertir DJVU a PDF?', answer: 'PDF es compatible de forma nativa con todos los sistemas operativos y navegadores modernos.' },
    ],
  },

  'fb2-to-pdf': {
    title: 'Convertir FB2 a PDF - Archivos FictionBook a PDF Online Gratis',
    metaDescription: 'Convierte libros en formato FB2 (FictionBook) a PDF de forma rápida y sencilla. Conserva capítulos e ilustraciones.',
    keywords: ['fb2 a pdf', 'convertir fb2 a pdf', 'fictionbook a pdf', 'ebook fb2 a pdf'],
    description: `
      <p>Convierte archivos FictionBook (.fb2 y .fb2.zip) a documentos PDF perfectamente formateados para una lectura cómoda e impresión.</p>
      <p>Organiza automáticamente la portada, títulos, capítulos e ilustraciones para ofrecerte la mejor experiencia de lectura digital.</p>
    `,
    howToUse: [
      { step: 1, title: 'Sube tu archivo FB2', description: 'Arrastra tu libro .fb2 o .fb2.zip.' },
      { step: 2, title: 'Conversión y maquetación', description: 'El motor adapta el contenido al formato de hoja PDF.' },
      { step: 3, title: 'Descarga tu nuevo PDF', description: 'Guarda tu libro electrónico listo para leer.' },
    ],
    useCases: [
      { title: 'Novelas y literatura clásica', description: 'Pasa libros descargados en FB2 a un formato compatible con tablets.', icon: 'book' },
    ],
    faq: [
      { question: '¿Soporta archivos .fb2.zip comprimidos?', answer: 'Sí, puedes subir directamente el archivo comprimido sin descomprimirlo antes.' },
    ],
  },

  'xps-to-pdf': {
    title: 'Convertir XPS a PDF Online Gratis - Archivos XPS y OXPS a PDF',
    metaDescription: 'Convierte documentos Microsoft XPS y OXPS a PDF con precisión total de diseño y colores. 100% gratis en tu navegador.',
    keywords: ['xps a pdf', 'convertir xps a pdf', 'oxps a pdf', 'pasar xps a pdf gratis'],
    description: `
      <p>Convierte archivos en formato XML Paper Specification (.xps y .oxps) creados en Windows a documentos PDF universales.</p>
      <p>Permite abrir y compartir planos, facturas y reportes de impresión de Windows en dispositivos Mac, Linux, iPhone o Android.</p>
    `,
    howToUse: [
      { step: 1, title: 'Sube tu archivo XPS', description: 'Arrastra tu archivo .xps u .oxps.' },
      { step: 2, title: 'Conversión de diseño', description: 'Los elementos vectoriales y textos se adaptan al estándar PDF.' },
      { step: 3, title: 'Descarga tu PDF', description: 'Guarda tu documento listo para compartir.' },
    ],
    useCases: [
      { title: 'Documentos impresos a XPS', description: 'Convierte trabajos enviados a la impresora XPS de Windows en PDFs estándar.', icon: 'printer' },
    ],
    faq: [
      { question: '¿Qué es un archivo XPS?', answer: 'Es el formato de documento de página fija creado por Microsoft como alternativa a PDF.' },
    ],
  },

  'rtf-to-pdf': {
    title: 'Convertir RTF a PDF - Archivos de Texto Enriquecido a PDF',
    metaDescription: 'Convierte documentos RTF (Rich Text Format) a PDF conservando negritas, colores, tipografías e imágenes. Gratis y seguro.',
    keywords: ['rtf a pdf', 'convertir rtf a pdf gratis', 'texto enriquecido a pdf'],
    description: `
      <p>Convierte archivos de texto enriquecido (.rtf) en documentos PDF limpios y profesionales. Ideal para asegurar que los estilos de texto no se alteren al enviarlos por correo electrónico.</p>
    `,
    howToUse: [
      { step: 1, title: 'Sube tu archivo RTF', description: 'Elige tu archivo de texto enriquecido.' },
      { step: 2, title: 'Procesamiento de formato', description: 'Se aplican los estilos y márgenes.' },
      { step: 3, title: 'Descarga tu PDF', description: 'Obtén tu documento en formato fijo.' },
    ],
    useCases: [
      { title: 'Documentación legal y notas', description: 'Transforma notas legales guardadas en RTF a PDF no manipulable.', icon: 'file-text' },
    ],
    faq: [
      { question: '¿Conserva las negritas e hipervínculos?', answer: 'Sí, todas las propiedades de texto enriquecido se transfieren al PDF.' },
    ],
  },

  'psd-to-pdf': {
    title: 'Convertir PSD a PDF - Archivos de Photoshop a Documentos PDF',
    metaDescription: 'Convierte diseños y fotos de Photoshop (.psd) a documentos PDF en alta resolución. Visualiza tus PSD sin Photoshop.',
    keywords: ['psd a pdf', 'convertir psd a pdf', 'photoshop a pdf gratis', 'abrir psd como pdf'],
    description: `
      <p>Convierte archivos de Adobe Photoshop (.psd) a documentos PDF listos para enviar a clientes o imprimir, sin necesidad de tener Photoshop instalado.</p>
      <p>Acombina capas visuales y genera una vista previa fiel con la máxima fidelidad de color.</p>
    `,
    howToUse: [
      { step: 1, title: 'Sube tu archivo PSD', description: 'Arrastra tu diseño de Photoshop.' },
      { step: 2, title: 'Generación de vista previa', description: 'El sistema renderiza las capas compuestas en alta resolución.' },
      { step: 3, title: 'Descarga tu PDF', description: 'Comparte tu propuesta gráfica en formato accesible.' },
    ],
    useCases: [
      { title: 'Aprobación de diseños', description: 'Envía bocetos a clientes que no tienen Photoshop instalado.', icon: 'image' },
    ],
    faq: [
      { question: '¿Se requiere tener instalado Photoshop?', answer: 'No, la herramienta procesa el archivo PSD de forma autónoma en tu navegador.' },
    ],
  },

  'pdf-to-svg': {
    title: 'Convertir PDF a SVG - Extraer Gráficos Vectoriales de PDF',
    metaDescription: 'Convierte páginas de PDF a gráficos vectoriales SVG escalables sin pérdida de resolución. Ideal para diseño web y edición en Illustrator.',
    keywords: ['pdf a svg', 'convertir pdf a svg gratis', 'vectorizar pdf a svg', 'extraer vectores de pdf'],
    description: `
      <p>Convierte tus documentos PDF en gráficos vectoriales SVG escalables. Conserva trazados de curvas, logotipos, diagramas y tipografías para abrirlos y editarlos en Illustrator, Figma, Inkscape o usarlos en sitios web.</p>
    `,
    howToUse: [
      { step: 1, title: 'Sube tu archivo PDF', description: 'Selecciona el PDF con los gráficos vectoriales.' },
      { step: 2, title: 'Selección de páginas', description: 'Elige las páginas a convertir en SVG.' },
      { step: 3, title: 'Descarga tus archivos SVG', description: 'Guarda los gráficos vectoriales listos para editar.' },
    ],
    useCases: [
      { title: 'Logotipos y branding', description: 'Recupera versiones vectoriales de logos incrustados en manuales PDF.', icon: 'layout-grid' },
      { title: 'Diseño web e infografías', description: 'Usa diagramas de PDF en tu página web con nitidez infinita.', icon: 'globe' },
    ],
    faq: [
      { question: '¿Los vectores mantienen su escalabilidad?', answer: 'Sí, los archivos SVG resultantes pueden ampliarse a cualquier tamaño sin pixelarse.' },
    ],
  },

  'ocg-manager': {
    title: 'Administrador de Capas PDF (OCG) - Gestionar Capas en PDF',
    metaDescription: 'Gestiona las capas (Grupos de Contenido Opcional - OCG) de tus planos y documentos PDF. Muestra, oculta, añade o elimina capas gratis.',
    keywords: ['capas pdf', 'gestor de capas pdf', 'ocg pdf', 'ver capas de planos pdf'],
    description: `
      <p>Herramienta profesional para visualizar, activar, ocultar o eliminar capas (OCG) en planos arquitectónicos, mapas topográficos y documentos técnicos en PDF.</p>
    `,
    howToUse: [
      { step: 1, title: 'Sube tu PDF con capas', description: 'Carga tu plano CAD o mapa en formato PDF.' },
      { step: 2, title: 'Gestiona las capas', description: 'Activa o desactiva la visibilidad de cada capa según necesites.' },
      { step: 3, title: 'Guarda los cambios', description: 'Descarga el PDF con las capas configuradas.' },
    ],
    useCases: [
      { title: 'Planos de construcción y CAD', description: 'Muestra u oculta instalaciones eléctricas, cotas o mobiliario.', icon: 'ruler' },
      { title: 'Mapas temáticos', description: 'Alterna capas de topografía, carreteras o límites territoriales.', icon: 'map' },
    ],
    faq: [
      { question: '¿Qué son las capas OCG en un PDF?', answer: 'Son capas independientes que permiten mostrar u ocultar elementos en documentos técnicos complejos.' },
    ],
  },

  'pdf-reader': {
    title: 'Lector de PDF Online Gratis - Visualizador de PDF en el Navegador',
    metaDescription: 'Lector y visualizador de archivos PDF online gratuito y seguro. Lee, navega, busca y visualiza documentos sin instalar programas.',
    keywords: ['lector de pdf online', 'abrir pdf en navegador', 'visor pdf gratis', 'leer pdf online'],
    description: `
      <p>Visualizador de PDF ligero, rápido y privado. Lee y navega por tus documentos directamente en el navegador con zoom, rotación y visualización a pantalla completa sin instalar ningún software adicional.</p>
    `,
    howToUse: [
      { step: 1, title: 'Abre tu documento PDF', description: 'Arrastra el archivo para visualizarlo al instante.' },
      { step: 2, title: 'Navega cómodamente', description: 'Usa los controles para cambiar de página, rotar o hacer zoom.' },
      { step: 3, title: 'Imprime o guarda', description: 'Consulta el archivo con total privacidad.' },
    ],
    useCases: [
      { title: 'Lectura rápida de archivos', description: 'Abre documentos sin esperar a que carguen lectores pesados.', icon: 'book-open' },
    ],
    faq: [
      { question: '¿Mis archivos se suben al servidor?', answer: 'No, el lector procesa los documentos 100% de forma local en tu navegador.' },
    ],
  },
};
