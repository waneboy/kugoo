import './RemoteDiagnostics.scss';

export default function RemoteDiagnostics() {
  return (
    <section className="remote-diagnostics">
      <div className="remote-diagnostics__banner">
        <div className="remote-diagnostics__content">
          <span className="remote-diagnostics__label">Услуга</span>
          <h1 className="remote-diagnostics__title">ОПРЕДЕЛИМ ПРИЧИНУ НЕИСПРАВНОСТИ УДАЛЕННО ИЛИ НА ДИАГНОСТИКЕ!</h1>
          <button className="remote-diagnostics__button" type="button">Записаться на диагностику</button>
        </div>
      </div>
    </section>
  );
}
