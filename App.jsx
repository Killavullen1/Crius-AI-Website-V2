const { useState: useStateApp, useEffect: useEffectApp } = React;

function TabWrap({ children }) {
  return <div style={{ animation: 'fadeIn .35s ease' }}>{children}</div>;
}

function App() {
  const [tab, setTab] = useStateApp(() => {
    try { return localStorage.getItem('crius_tab') || 'home'; } catch (e) { return 'home'; }
  });

  useEffectApp(() => {
    try { localStorage.setItem('crius_tab', tab); } catch (e) {}
    window.scrollTo({ top: 0, behavior: 'instant' in window ? 'instant' : 'auto' });
    window.__setTab = setTab;
  }, [tab]);

  let content = null;
  if (tab === 'home') {
    content = (
      <TabWrap>
        <Hero />
        <LogoStrip />
      </TabWrap>
    );
  } else if (tab === 'platform') {
    content = (
      <TabWrap>
        <Platform />
        <RecipeFeature />
      </TabWrap>
    );
  } else if (tab === 'build') {
    content = (
      <TabWrap>
        <Build />
      </TabWrap>
    );
  } else if (tab === 'about') {
    content = (
      <TabWrap>
        <About />
        <Team />
        <FAQ />
      </TabWrap>
    );
  } else if (tab === 'contact') {
    content = (
      <TabWrap>
        <DemoForm />
      </TabWrap>
    );
  } else {
    // fallback for any legacy tab values
    content = (
      <TabWrap>
        <Hero />
        <LogoStrip />
      </TabWrap>
    );
  }

  return (
    <React.Fragment>
      <Nav tab={tab} setTab={setTab} />
      {content}
      <Footer setTab={setTab} />
    </React.Fragment>
  );
}

ReactDOM.createRoot(document.getElementById('root')).render(<App />);
