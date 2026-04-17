# Open Sorcery

> Summoning code like the ultimate Open Sorceress.

A native macOS terminal, built for people who juggle agents. Fast, minimal,
agent-native, composable. Forked from
[cmux](https://github.com/manaflow-ai/cmux) and continuously re-tuned for a
calmer, more intentional UI.

## What's in here

- Native AppKit/SwiftUI shell
- Ghostty/libghostty terminal rendering
- Workspace sidebar, tabs, splits
- Agent attention ring on panes that need you
- Built-in browser with omnibar
- CLI / socket automation
- `CmuxDesign` token system (spacing, radii, hover/focus rules) — single
  source of truth the UI pulls from

## Quick start

```bash
./scripts/setup.sh                       # init submodules + build GhosttyKit
./scripts/reload.sh --tag first          # build Debug with your own tag
./scripts/reload.sh --tag first --launch # kill existing and open
```

`reload.sh` prints the built `.app` path. Cmd-click that path in the
terminal, or pass `--launch` to open it automatically.

## Branding notes

Display name (Dock, Finder, menu bar, About) is **Open Sorcery**. The
internal binary name, Xcode scheme, bundle identifier, and on-disk config
paths are still under the `cmux` namespace — a deeper rename would
require reworking entitlements, keychain access groups, Sparkle feeds,
socket paths, and user migrations. That's tracked as follow-up work so
that early users can migrate without losing settings.

## License

MIT. See [LICENSE](./LICENSE).
