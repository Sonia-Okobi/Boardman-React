import { useMemo, useState } from 'react';

export default function useTab({ tabs, defaultValue }) {
  const [tabState, setTabState] = useState(defaultValue || tabs[0].title);

  const newTabs = useMemo(() => {
    return tabs.map((tab) => ({
      ...tab,
      activate: () => setTabState(tab.title),
      isActive: tabState === tab.title,
    }));
  }, [tabs, tabState]);

  return [newTabs, tabState, setTabState];
}
