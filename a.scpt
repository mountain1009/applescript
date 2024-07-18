-- クリップボードの元の内容を保存
set originalClipboard to (the clipboard as «class RTF »)

-- クリップボードを一時的に空に設定
set the clipboard to ""

-- 現在の選択をコピー
tell application "System Events"
    keystroke "c" using {command down}
end tell

delay 0.1 -- コピーが完了するまで待機

-- クリップボードの内容を取得
try
    set clipboardContents to (the clipboard as text)
on error
    set clipboardContents to ""
end try

-- クリップボードが空であれば空文字を返す
if clipboardContents is equal to "" then
    -- クリップボードを元の内容に戻す
    set the clipboard to originalClipboard
    return ""
else
    -- クリップボードを元の内容に戻す
    set the clipboard to originalClipboard
    return clipboardContents
end if
