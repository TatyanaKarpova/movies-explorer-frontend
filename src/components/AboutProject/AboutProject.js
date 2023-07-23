import "./AboutProject.css";

function AboutProject() {
  return (
    <section className='about-project' id='about-project'>
      <h2 className='about-project__title'>О проекте</h2>
      <div className='about-project__container'>
        <div className='about-project__text-container'>
          <h3 className='about-project__text-title'>
            Дипломный проект включал 5&nbsp;этапов
          </h3>
          <p className='about-project__text'>
            Составление плана, работу над бэкендом, вёрстку, добавление
            функциональности и&nbsp;финальные доработки.
          </p>
        </div>
        <div className='about-project__text-container'>
          <h3 className='about-project__text-title'>
            На&nbsp;выполнение диплома ушло 5&nbsp;недель
          </h3>
          <p className='about-project__text'>
            У&nbsp;каждого этапа был мягкий и&nbsp;жёсткий дедлайн, которые
            нужно было соблюдать, чтобы успешно защититься.
          </p>
        </div>
        <div className='about-project__timeline-blocks-container'>
          <div className='about-project__timeline-container'>
            <h4 className='about-project__timeline-title'>1 неделя</h4>
            <p className='about-project__timeline-subtitle'>Back-end</p>
          </div>
          <div className='about-project__timeline-container'>
            <h4 className='about-project__timeline-title about-project__timeline-title_type_light'>
              4 недели
            </h4>
            <p className='about-project__timeline-subtitle'>Front-end</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutProject;